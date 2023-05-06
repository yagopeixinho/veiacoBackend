from flask import jsonify, request
from app.api import bp

from app.api.auth import token_required
from app.models import Schedule
from app.utils import veiacoResponse
from app import db



@bp.route('/schedules', methods=['GET'])
@token_required
def get_schedule(current_user):
    """
    @api /veiaco
    Create a Veiaco
    """

    schedules = Schedule.query.all()

    schedule_json = [schedule.to_dict() for schedule in schedules]

    return veiacoResponse(200, schedule_json)
    


@bp.route('/schedules', methods=['POST'])
@token_required
def create_schedule(current_user):
    """
    @api /veiaco
    Create a Veiaco
    """
    body = request.get_json()

    requireds = ['subject']
    absent = [field for field in requireds if field not in body]

    if len(absent) > 0:
        return veiacoResponse(400, {'msg': 'Field not found'})

    try:
        schedule = Schedule()
        schedule.from_dict(body)

        db.session.add(schedule)
        db.session.commit()

        return veiacoResponse(201, schedule.to_dict(), "Success")
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Error trying to create')
    