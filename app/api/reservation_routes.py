from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from app.models import Property, Reservation, db
from datetime import datetime
from datetime import timedelta

reservation_routes = Blueprint('reservation', __name__)


@reservation_routes.route('/', methods=['POST'])
@login_required
def reserve():
  data = request.get_json()
  startDate = data["startDate"]
  endDate = data["endDate"]
  num_guest = data["numGuest"]
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
    date = a + timedelta(days=i)
    newReservation = Reservation(
      user=current_user,
      property_id=property_id,
      date=date,
      numGuests=num_guest,
      date_range=f'{first} - {second}'
    )
    db.session.add(newReservation)
    db.session.commit()
  return {"success": True}

@reservation_routes.route('/<int:property_id>/<date_range>/')
@login_required
def fetch_reservation(property_id, date_range):
  property = Property.query.get(property_id);
  if not property:
    return {"property": None}

  reservations = list(
    filter(
      lambda x: (x.property_id == property_id) and (x.date_range == date_range),
      current_user.reservations
    )
  )

  if not len(reservations):
    return {"property": None}

  return {
    "property": property.to_dict(),
    "dateRange": reservations[0].date_range
  }

@reservation_routes.route('/<int:property_id>/<date_range>/', methods=['PATCH'])
@login_required
def edit_reservation(property_id, date_range):
  property = Property.query.get(property_id)
  if not property:
    return {"success": True}

  reservations = list(
    filter(
      lambda x: (x.property_id == property_id) and (x.date_range == date_range),
      current_user.reservations
    )
  )

  if not len(reservations):
    return {"success": True}

  for reservation in reservations:
    db.session.delete(reservation)

  return reserve()
