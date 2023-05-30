from flask import jsonify, request
from app.api import bp

from app.api.auth import token_required
from app.models import Schedule
from app.utils import veiacoResponse
from app import db


@bp.route('/schedules', methods=['GET'])
@token_required
def get_schedules(current_user):
    """
    @api /schedule
    Create a Schedule
    """

    try:
        schedules = Schedule.query.filter_by(user_id=current_user.id)

        schedule_json = [schedule.to_dict() for schedule in schedules]

        return veiacoResponse(200, schedule_json)
    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to catch Veiacos')


@bp.route('/schedules/<id>', methods=['GET'])
@token_required
def get_schedule(current_user, id):
    """"
    @api /schedule/id
    Return a Schedule
    """

    try:
        schedules = Schedule.query.filter_by(id=id).first()

        return veiacoResponse(200, schedules.to_dict())

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, [], 'Error when trying to catch Schedules')


@bp.route('/schedules', methods=['POST'])
@token_required
def create_schedule(current_user):
    """
    @api /schedules
    Create a Schedule
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


@bp.route('/schedules/<id>', methods=['DELETE'])
@token_required
def delete_schedule(current_user, id):
    """
    @api /veiaco/id
    Delete Veiaco
    """

    try:
        schedule = Schedule.query.filter_by(id=id).first()

        db.session.delete(schedule)
        db.session.commit()

        return veiacoResponse(200, schedule.to_dict(), "schedule deleted!")

    except Exception as e:
        print('Error:', e)
        return veiacoResponse(400, {}, 'Something went wrong when trying to delete Veiaco')
