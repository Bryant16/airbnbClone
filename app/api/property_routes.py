from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Property

property_routes = Blueprint('property', __name__)


@property_routes.route('/<int:id>')
def soloProperty(id):
    soloProp = Property.query.get(id)
    print(soloProp)
    return jsonify(soloProp.to_dict())


# @user_routes.route('/<int:id>')
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()
