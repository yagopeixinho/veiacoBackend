from app.api import bp
from app.models import User
from app import Response, json

@bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    
    users_json = [user.to_dict() for user in users]
    print(users_json)
    
    return Response(json.dumps(users_json))