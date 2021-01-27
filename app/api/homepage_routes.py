from flask import Blueprint, jsonify
from app.models import School

homepage_routes = Blueprint('/', __name__)


@homepage_routes.route('')
def properties():
    schools = [s.to_dict for s in School.query.all()]
    return jsonify({"schools": schools})
