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
def user(id):
  user = User.query.get(id)
  return {'user': user.to_dict() if user else None}

@user_routes.route('/<int:id>/properties')
def properties(id):
  user = User.query.get(id);
  return {'list': user.to_owner()['properties'] if user else None}

@user_routes.route('/me')
@login_required
def my_profile():
  return {'user': current_user.to_dict()}

@user_routes.route('/me/properties')
@login_required
def my_properties():
  return {'list': current_user.to_owner()['properties']}

@user_routes.route('/me/reservations')
@login_required
def my_reservations():
  return {'list': [res.to_summary() for res in current_user.to_guest()['reservations']]}
