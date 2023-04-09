from flask import jsonify, request
from app.api import bp
from app.models import User
import datetime
import os
import jwt


@bp.route('/token', methods=['POST'])
def login():
    body = request.get_json()
    
    user = User.query.filter_by(email=body['email']).first_or_404()
    
    if not user.verify_password(body['password']):
        return jsonify({
            "message": "Email or Password invalid"
        }), 403
        
    payload = {
        'id': user.id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
    }
    
    token = jwt.encode(payload, os.getenv("SECRET_KEY"))
    
    return jsonify({'token': token, 'user': user.to_dict()})