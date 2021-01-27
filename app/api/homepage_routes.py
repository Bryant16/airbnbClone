from flask import Blueprint, jsonify
from app.models import School

homepage_routes = Blueprint('homepage', __name__)


@homepage_routes.route('')
def properties():
    school = School.query.all()
    return jsonify(school.to_dict)
