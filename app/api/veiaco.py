from flask import Response, request
from app.api import bp
from app.api.auth import token_required
from app.models import Veiaco, Debt, veiaco_has_debt
from app import db
from app.utils import veiacoResponse


@bp.route('/veiaco', methods=['GET'])
@token_required
def get_veiacos(current_user):
    """"
    @api /veiaco
    Return a User Veiaco List
    """

    try:
        veiacos = Veiaco.query.filter_by(user_id=current_user.id)

        veiacos_list_json = [veiaco.to_dict() for veiaco in veiacos]

        return veiacoResponse(200, veiacos_list_json)
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to catch Veiacos')


@bp.route('/veiaco/<id>', methods=['GET'])
@token_required
def get_veiaco(current_user, id):
    """"
    @api /veiaco/id
    Return a User Veiaco
    """

    try:
        veiaco = Veiaco.query.filter_by(id=id).first()

        return veiacoResponse(200, veiaco.to_dict())

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to catch Veiaco')


@bp.route('/veiaco/<id>/debt', methods=['GET'])
@token_required
def get_veiaco_debts(current_user, id):
    """
    @api /veiaco/id/debt
    Get Veiaco Debts List
    """

    try:
        veiaco_debts = Debt.query.join(
            Veiaco.veiaco_has_debt).filter(Veiaco.id == id).all()

        veiaco_debt_list = [debt.to_dict() for debt in veiaco_debts]

        return veiacoResponse(201, veiaco_debt_list)
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to update Veiaco')


@bp.route('/veiaco', methods=['POST'])
@token_required
def create_veiaco(current_user):
    """
    @api /veiaco
    Create a Veiaco
    """

    body = request.get_json()

    requireds = ['name']
    absent = [field for field in requireds if field not in body]

    if len(absent) > 0:
        return veiacoResponse(400, {'msg': 'Field not found'})

    try:
        veiaco = Veiaco(user=current_user)
        veiaco.from_dict(body)

        db.session.add(veiaco)
        db.session.commit()

        return veiacoResponse(201, veiaco.to_dict(), "Success")
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Error trying to create')


@bp.route('/veiaco/<id>', methods=['PUT'])
@token_required
def edit_veiaco(current_user, id):
    """
    @api /veiaco/id
    Edit a Veiaco data
    """

    try:
        veiaco_data = Veiaco.query.filter_by(id=id).first()
        body = request.get_json()

        if 'name' in body:
            veiaco_data.name = body['name']
        if 'email' in body:
            veiaco_data.email = body['email']
        if 'phone' in body:
            veiaco_data.phone = body['phone']
        if 'occupation' in body:
            veiaco_data.occupation = body['occupation']

        db.session.add(veiaco_data)
        db.session.commit()

        return veiacoResponse(200, veiaco_data.to_dict())

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to update Veiaco')


@bp.route('/veiaco/<id>', methods=['DELETE'])
@token_required
def delete_user(current_user, id):
    """
    @api /veiaco/id
    Delete Veiaco
    """

    try:
        veiaco = Veiaco.query.filter_by(id=id).first()

        db.session.delete(veiaco)
        db.session.commit()

        return veiacoResponse(200, veiaco.to_dict(), "Veiaco deleted!")

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Something went wrong when trying to delete Veiaco')
