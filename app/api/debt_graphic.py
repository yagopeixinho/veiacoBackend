from app.api import bp
from app.api.auth import token_required
from app.models import Debt, Veiaco
from app.utils import veiacoResponse
import datetime


@bp.route('/veiaco/<id>/bar_chart', methods=['GET'])
@token_required
def get_bar_chart(current_user, id):
    debts = Debt.query.join(Veiaco.veiaco_has_debt).filter(
        Veiaco.id == id).order_by("created_on").all()

    debt_list_json = [debt.to_dict() for debt in debts]

    # Get date interval
    interval_dates = []
    for debt in debt_list_json:
        if not debt['date'] in interval_dates:
            interval_dates.append(debt['date'])

    # Get debt list
    structured_debt_per_day = []
    for interval in interval_dates:
        structured_debt_per_day.append({'date': interval, 'debts': [
                                       debt for debt in debt_list_json if debt['date'] == interval]})

    # Insert total value
    for debt_per_day in structured_debt_per_day:
        debt_day_value = 0

        for debt in debt_per_day['debts']:
            debt_day_value = debt['value'] + debt_day_value

        debt_per_day['total_value'] = debt_day_value

    return veiacoResponse(201, structured_debt_per_day)


@bp.route('/veiaco/<id>/pie_chart', methods=['GET'])
@token_required
def get_pie_chart(current_user, id):
    debts = Debt.query.join(Veiaco.veiaco_has_debt).filter(
        Veiaco.id == id).order_by("created_on").all()

    lazer = 0
    transporte = 0
    saude = 0
    bares_e_restaurantes = 0
    educacao = 0
    servicos = 0
    outros = 0

    def returnItemList(item):
        return {'name': item.category.name, 'id': item.category.id}

    debt_list_json = [returnItemList(debt) for debt in debts]

    for item in debt_list_json:
        if item['id'] == 1:
            lazer = lazer + 1
        if item['id'] == 2:
            transporte = transporte + 1
        if item['id'] == 3:
            saude = saude + 1
        if item['id'] == 4:
            bares_e_restaurantes = bares_e_restaurantes + 1
        if item['id'] == 5:
            educacao = educacao + 1
        if item['id'] == 6:
            servicos = servicos + 1
        if item['id'] == 7:
            outros = outros + 1

    def checkPie(cat):
        if cat['value'] == 0:
            del cat
        else:
            return cat

    pie = [{'name': 'Lazer', 'value': lazer},
           {'name': 'Transporte', 'value': transporte},
           {'name': 'Saúde', 'value': saude},
           {'name': 'Bar e Restaurante', 'value': bares_e_restaurantes},
           {'name': 'Educação', 'value': educacao},
           {'name': 'Serviços', 'value': servicos},
           {'name': 'Outros', 'value': outros}]

    pie = [checkPie(individualCat) for individualCat in pie]

    pie_final_obj = [item for item in pie if item is not None]

    return veiacoResponse(201, {'category': pie_final_obj})


@bp.route('/veiaco/<id>/total_debt', methods=['GET'])
@token_required
def get_total_debt(current_user, id):
    debts = Debt.query.join(Veiaco.veiaco_has_debt).filter(
        Veiaco.id == id).order_by("created_on").all()
    

    return veiacoResponse(201, {'category': debts})
