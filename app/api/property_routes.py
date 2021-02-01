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
  prep = f"{payload['address1']} {payload['address2']} {payload['city']} {payload['zipCode']}"
  coords = find_coordinates(prep)
  try:
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
    return jsonify({'success': True, 'id': new_property.id})
  except:
    return jsonify({'success': False})
