from flask import Blueprint, jsonify, request
from .geolocate import find_coordinates
from app.models import Property

search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def search():
  location = request.args.get("location")
  private = request.args.get("private")
  # start_date = request.args.get("start_date")
  # end_date = request.args.get("end_date")
  num_guests = request.args.get("guests") 
  response = find_coordinates(location)
  longitude = response["longitude"]
  latitude = response["latitude"]
  locations_in_area = Property.query.filter(Property.longitude.between(longitude - 2, longitude + 2), Property.latitude.between(latitude - 2, latitude + 2), Property.guest_spots >= num_guests).all()
  locations = [location.to_dict for location in locations_in_area]
  json = jsonify(locations)

  return json
