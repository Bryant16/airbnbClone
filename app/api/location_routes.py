from flask import Blueprint, jsonify
from app.models import Property

location_routes = Blueprint('locations', __name__)


@location_routes.route('/<string:city>/properties')
def properties(city):
  properties = [p.to_summary for p in Property.query.filter(Property.city==city.title()).all()]
  return jsonify({'list': properties})
