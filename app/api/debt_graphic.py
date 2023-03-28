from app.api import bp
from app.api.auth import token_required
from app.models import Debt, Veiaco
from app.utils import veiacoResponse
import datetime



@bp.route('/veiaco/<id>/debt_graphic', methods=['GET'])
@token_required
def get_debt_graphic(current_user, id):
    debts = Debt.query.join(Veiaco.veiaco_has_debt).filter(Veiaco.id == id).order_by("created_on").all()
    
    debt_list_json = [debt.to_dict() for debt in debts]
    
  
    # Get date interval
    interval_dates = []
    for debt in debt_list_json:
        if not debt['date'] in interval_dates:
            interval_dates.append(debt['date'])
            

    # Get debt list
    graphic_bar_object = []
    
    for interval in interval_dates:
        graphic_bar_object.append({'date': interval,'debts': [debt for debt in debt_list_json if debt['date'] == interval]})
    


    return veiacoResponse(201, graphic_bar_object)

