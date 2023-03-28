from flask import request
from app.api import bp
from app.api.auth import token_required
from app.models import Debt, Veiaco
from app.utils import veiacoResponse
from app import db
from datetime import datetime



@bp.route('/debt', methods=['POST'])
@token_required
def create_post(current_user):
    """
    @api /debt
    Create Debt
    """
    
    body = request.get_json()
    
    try:
        debt = Debt(name=body['name'], value=body['value'], status=body['status'], date=datetime.strptime(body['date'], "%d/%m/%Y"), category_id=body['category_id'])
        
        veiaco = Veiaco.query.filter_by(id=body['veiaco_id']).first()
        
        veiaco.veiaco_has_debt.append(debt)
        
        db.session.commit()
        
        return veiacoResponse(201, debt.to_dict(), "Success")
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Error trying to create')


@bp.route('/debt/<id>', methods=['GET'])
@token_required
def get_debt(current_user, id):
    """
    @api /debt/id
    Get a Debt
    """
    
    try:
        debt = Debt.query.filter_by(id=id).first()
        
        return veiacoResponse(200, debt.to_dict())
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Error trying to get a debt')
    

@bp.route('/debt/<id>', methods=['PUT'])
@token_required
def edit_debt(current_user, id):
    """
    @api /debt/id
    Update Debt data
    """
    
    try:
        debt_data = Debt.query.filter_by(id=id).first()
        body = request.get_json()
        
        if 'name' in body:
            debt_data.name = body['name']
        if 'value' in body:
            debt_data.value = body['value']
        if 'status' in body:
            debt_data.status = body['status']
        if 'category_id' in body:
            debt_data.category_id = body['category_id']
        if 'date' in body:
            debt_data.date = body['date']
            
            
        db.session.add(debt_data)
        db.session.commit()
            
        return veiacoResponse(200, debt_data.to_dict())

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to update Veiaco')
    
    
    
@bp.route('/debt/<id>', methods=['DELETE'])
@token_required
def delete_debt(current_user, id):
    """
    @api /debt/id
    Delete Debt
    """
    
    try:
        debt = Debt.query.filter_by(id=id).first()
        
        db.session.delete(debt)
        db.session.commit()
        
        return veiacoResponse(200, debt.to_dict(), "Debt deleted!")

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Something went wrong when trying to delete Debt')
    