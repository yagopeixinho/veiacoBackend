from flask import json, request
from app.api import bp
from app.api.auth import token_required
from app.utils import veiacoResponse
from app.models import Category
from app import db


@bp.route('/category', methods=['POST'])
@token_required
def create_category(current_user):
    """
    @api /category
    Create category
    """
    
    body = request.get_json()
    
    try:
        category = Category(name=body['name'])
        
        db.session.add(category)
        db.session.commit()
        
        return veiacoResponse(201, category.to_dict(), 'Category created successfuly')
        
    except Exception as e:
        print('Error: ', e)
        return veiacoResponse(400, {}, 'Error trying to create category')
