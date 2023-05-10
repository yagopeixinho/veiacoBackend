
import app
from app.api import bp
from flask import jsonify

class APIError(Exception):
    pass


class APIAuthError(APIError):
    code = 403
    description = "Authentication Error"


@bp.app_errorhandler(APIError)
def handle_exception(err):
    error, code = err.args
    response = {'error': error, 'status': code}
   
    return jsonify(response), code

@bp.app_errorhandler(500)
def handle_exception(err):
    response = {"error": "Ops! Ocorreu um erro interno no sistema. Contate os administradores para que isso possa ser resolvido."}
    return jsonify(response), 500

@bp.app_errorhandler(404)
def handle_exception(err):
    """Return JSON instead of HTML for any other server error"""
    response = {"error": "Rota não encontrada"}
    return jsonify(response), 404