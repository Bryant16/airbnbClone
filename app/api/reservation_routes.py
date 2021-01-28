from flask import Blueprint, jsonify, request
from app.models import Property, Reservation, db
from datetime import datetime
from datetime import timedelta

reservation_routes = Blueprint('reservation', __name__)


@reservation_routes.route('/', methods=['POST'])
def search():
    data = request.get_json()
    startDate = data["startDate"]
    endDate = data["endDate"]
    guest_id = data["user"]
    property_id = data["property"]
    date = data["startDate"]
    date_format = "%Y-%m-%d"
    first = startDate[0:10]
    second = endDate[0:10]
    a = datetime.strptime(first, date_format)
    b = datetime.strptime(second, date_format)
    delta = b-a
    numdays = delta.days
    for i in range(numdays+1):
        # a = timedelta(days=1)
        increase = a + timedelta(days=i)
        newReservation = Reservation(
        guest_id=guest_id, property_id=property_id, date=increase)
        db.session.add(newReservation)
        db.session.commit()
    print('NUM DAYS', delta.days)
    return jsonify(data)
