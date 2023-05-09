from flask import jsonify, request
from app.api import bp
from app.models import User
import datetime
import os
import jwt
from app.api.errors import APIAuthError, APIError


@bp.route('/token', methods=['POST'])
def login():
    body = request.get_json()
    
    user = User.query.filter_by(email=body['email']).first()
    
    if not hasattr(user, 'verify_password'): 
        raise APIError('E-mail ou senha inválido', 400)

    if not user.verify_password(body['password']):
        raise APIError('E-mail ou senha inválido', 400)

    payload = {
        'id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }
    
    token = jwt.encode(payload, os.getenv("SECRET_KEY"))
    
    return jsonify({'token': token, 'user': user.to_dict()})