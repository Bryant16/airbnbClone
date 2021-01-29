from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Property, db
from .geolocate import find_coordinates

property_routes = Blueprint('property', __name__)


@property_routes.route('/<int:id>')
def soloProperty(id):
    soloProp = Property.query.get(id)
    return jsonify(soloProp.to_dict)


@property_routes.route('/', methods=['POST'])
def create_property():
  payload = request.get_json()
  prep = f"{payload['address1']} {payload['address2']} {payload['city']} {payload['zip_code']}"
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print(prep)
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  print('-------------------------------------')
  coords = find_coordinates(prep)
  # try:
  newProperty = Property(
    owner_id=current_user.id,
    private=payload['private'],
    nightly_rate_usd=payload['nightly_rate_usd'],
    address1=payload['address1'],
    address2=payload['address2'],
    city=payload['city'],
    zip_code=payload['zip_code'],
    latitude=coords['latitude'],
    longitude=coords['longitude'],
    listing_title=payload['listing_title'],
    description=payload['description'],
    check_in=payload['check_in'],
    check_out=payload['check_out'],
    guest_spots=payload['guest_spots']
  )
  db.session.add(newProperty)
  db.session.commit()
  # except:
    # return jsonify({'success': False}), 400
  return jsonify({'success': True})
