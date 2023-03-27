from flask import Response, request
from app.api import bp
from app.models import User
from app import db
import json
from app.api.auth import token_required


@bp.route('/users', methods=['GET'])
@token_required
def get_users(current_user):
    users = User.query.all()
  
    users_json = [user.to_dict() for user in users]
    
    return Response(json.dumps(users_json))


@bp.route('/users', methods=['POST'])
@token_required
def create_user(current_user):
    body = request.get_json()

    try:
        user = User(name=body['name'], email=body['email'])
        user.hash_pasword(body['password'])
        
        db.session.add(user)
        db.session.commit()
     
        return Response(json.dumps({"email": user.email}), status=201, mimetype="application/json")
    except Exception as e:
        print('Error', e)
        
        return Response()
        
