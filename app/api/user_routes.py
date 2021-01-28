from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User
from sqlalchemy.orm import joinedload

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
  users = User.query.all()
  return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
  user = User.query.get(id)
  return jsonify({'user': user.to_dict() if user else None})

@user_routes.route('/<int:id>/properties')
@login_required
def properties(id):
  user = User.query.get(id);
  return jsonify({'list': user.to_owner()['properties'] if user else None})

@user_routes.route('/me')
@login_required
def my_profile():
  return jsonify({'user': current_user.to_dict()})

@user_routes.route('/me/properties')
@login_required
def my_properties():
  return jsonify({'list': current_user.to_owner()['properties']})
