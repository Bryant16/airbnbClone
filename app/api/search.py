from flask import Blueprint, jsonify, request
from .geolocate import find_coordinates

search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def search():
  location = request.args.get("location")
  # private = request.args.get("private")
  # start_date = request.args.get("start_date")
  # end_date = request.args.get("end_date")
  # num_guests = request.args.get("num_guests")

  response = find_coordinates(location)

  return response
  # return response.latitude
