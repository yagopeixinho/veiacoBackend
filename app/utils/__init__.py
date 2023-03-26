from flask import Response
import json

def veiacoResponse(status, content, message=False):
    body = {
        "items": content
    }

    return Response(json.dumps(body), status=status, mimetype='application/json')