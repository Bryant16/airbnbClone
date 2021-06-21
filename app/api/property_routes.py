from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Property, db
from .geolocate import find_coordinates

property_routes = Blueprint('property', __name__)


@property_routes.route('/<int:id>')
def soloProperty(id):
    soloProp = Property.query.get(id)
    return {'details': soloProp and soloProp.to_dict()}


@property_routes.route('/', methods=['POST'])
def create_property():
  payload = request.get_json()
  errors = []
  if not payload['address1']:
    errors.append('Please provide a primary street address')
  if not payload['city']:
    errors.append('Please provide a city')
  if not payload['zipCode']:
    errors.append('Please provide a zip code')
  if not payload['listingTitle']:
    errors.append('Please provide a title')
  if not payload['description']:
    errors.append('Please provide a description')
  if not payload['checkIn']:
    errors.append('Please provide a check-in time')
  if not payload['checkOut']:
    errors.append('Please provide a check-out time')
  if not payload['guestSpots']:
    errors.append('Please provide a maximum number of guests')
  if len(errors):
    return {'errors': errors}
  prep = f"{payload['address1']} {payload['address2']} {payload['city']} {payload['zipCode']}"
  coords = find_coordinates(prep)
  if not coords or not coords['latitude'] or not coords['longitude']:
    return {'errors': ['Sorry, our system wasn\'t able to locate that address ']}
  new_property = Property(
    owner_id=current_user.id,
    private=payload['private'],
    nightly_rate_usd=payload['nightlyRate'],
    address1=payload['address1'],
    address2=payload['address2'],
    city=payload['city'],
    zip_code=payload['zipCode'],
    latitude=coords['latitude'],
    longitude=coords['longitude'],
    listing_title=payload['listingTitle'],
    description=payload['description'],
    check_in=payload['checkIn'],
    check_out=payload['checkOut'],
    guest_spots=payload['guestSpots']
  )
  db.session.add(new_property)
  db.session.commit()
  return {'success': True, 'id': new_property.id}

@property_routes.route('/<int:property_id>/booked/')
@login_required
def already_booked(property_id):
  property = Property.query.get(property_id)

  if not property:
    return {"dates": None}

  return {"dates": [reservation.date for reservation in list(filter(lambda x: x.property_id == property_id, current_user.reservations))]}
