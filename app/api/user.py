from flask import Response, request
from app.api import bp
from app.models import User
from app import db
import json
from app.api.auth import token_required
from app.utils import veiacoResponse
from app.api.errors import APIError

@bp.route('/users', methods=['GET'])
@token_required
def get_users(current_user):
    users = User.query.all()
  
    users_json = [user.to_dict() for user in users]
    
    return Response(json.dumps(users_json))


@bp.route('/users', methods=['POST'])
def create_user():
    body = request.get_json()

    if User.query.filter_by(email=body['email']).first():
        raise APIError('Esse e-mail já está sendo utilizado', 409)
        

    try:
        user = User(name=body['name'], email=body['email'])
        user.hash_pasword(body['password'])
        
        db.session.add(user)
        db.session.commit()
     
        return veiacoResponse(200, user.to_dict(), "User created successfuly.")
    except Exception as e:
        print('Error', e)
        
        return Response()
        
