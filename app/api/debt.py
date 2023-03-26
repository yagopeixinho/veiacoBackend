from flask import request
from app.api import bp
from app.api.auth import token_required
from app.models import Debt, Veiaco
from app.utils import veiacoResponse
from app import db

@bp.route('/debt', methods=['POST'])
@token_required
def create_post(current_user):
    """
    @api /debt
    Create debt
    """
    
    body = request.get_json()
    
    try:
        debt = Debt(name=body['name'], value=body['value'], open=body['open'], category_id=body['category_id'])
        veiaco = Veiaco.query.filter_by(id=body['veiaco_id']).first()
        
        veiaco.veiaco_has_debt.append(debt)
        
        db.session.commit()
        
        return veiacoResponse(201, debt.to_dict(), "Success")
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Error trying to create')

    




