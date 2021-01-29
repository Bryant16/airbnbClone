from flask import Blueprint, jsonify
from app.models import School, Property

homepage_routes = Blueprint('/schools', __name__)


@homepage_routes.route('')
def schoolsListings():
    schools = [s.to_dict for s in School.query.all()]
    return jsonify({"schools": schools})

@homepage_routes.route('/<int:id>')
def propertiesNearSchool(id):
    school = School.query.filter(School.id == id).first()
    school_longitude = school.longitude
    school_latitude = school.latitude
    properties_near_schools = Property.query.filter(Property.longitude.between(school_longitude - 2, school_longitude + 2), Property.latitude.between(school_latitude - 2, school_latitude + 2)).all()
    property_locations = [location.to_dict for location in properties_near_schools]
    return jsonify(property_locations)
