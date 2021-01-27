from flask import Blueprint, jsonify, request
from app.models import Property, Reservation

reservation_routes = Blueprint('reservation', __name__)


@reservation_routes.route('/', methods=['POST'])
def search():
    data= request.data
    print('DATAAAAAAA', data)
    # return jsonify(data)