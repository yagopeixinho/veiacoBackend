from flask import jsonify, request
from app.models import User
import jwt
import os
from functools import wraps


def token_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = None
        
        if 'authorization' in request.headers:
            token = request.headers['authorization']
            
        if not token:
            return jsonify({'msg': 'Permission denied!'}), 403
        
        if not "Bearer" in token:
            return jsonify({'msg': 'Invalid token!'}), 401
        
        try:
            token_pure = token.replace("Bearer ", "")
            decoded = jwt.decode(token_pure, os.getenv("SECRET_KEY"), options={"verify_signature": False})
            current_user = User.query.get(decoded['id'])
            
        except:
            return jsonify({'msg': 'Invalid token!'}), 401

        
        return f(current_user=current_user, *args, **kwargs)
    
    return wrapper