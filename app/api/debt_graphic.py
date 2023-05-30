from app.api import bp
from app.api.auth import token_required
from app.models import Debt, Veiaco
from app.utils import veiacoResponse
import datetime


@bp.route('/veiaco/<id>/bar_chart', methods=['GET'])
@token_required
def get_bar_chart(current_user, id):

    debts = Debt.query \
        .join(Veiaco.veiaco_has_debt) \
        .filter(Veiaco.id == id, Debt.status == True) \
        .order_by("created_on") \
        .all()

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
    debts = Debt.query \
        .join(Veiaco.veiaco_has_debt) \
        .filter(Veiaco.id == id, Debt.status == True) \
        .order_by("created_on") \
        .all()

    categories = {
        1: 'Lazer',
        2: 'Transporte',
        3: 'Saúde',
        4: 'Bar e Restaurante',
        5: 'Educação',
        6: 'Serviços',
        7: 'Outros'
    }

    category_counts = {category: 0 for category in categories.values()}

    for debt in debts:
        category_id = debt.category.id
        if category_id in categories:
            category = categories[category_id]
            category_counts[category] += 1

    pie_chart_data = [{'name': category, 'value': count}
                      for category, count in category_counts.items() if count > 0]

    return veiacoResponse(201, {'category': pie_chart_data})


@bp.route('/veiaco/<id>/total_debt', methods=['GET'])
@token_required
def get_total_debt(current_user, id):
    debts = Debt.query \
        .join(Veiaco.veiaco_has_debt) \
        .filter(Veiaco.id == id, Debt.status == True) \
        .order_by("created_on") \
        .all()

    total = sum(debt.value for debt in debts)

    return veiacoResponse(201, {'totalValue': total})
