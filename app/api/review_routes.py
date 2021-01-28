from flask import Blueprint, jsonify, request
from flask_login import current_user
from app.models import Review, db


review_routes = Blueprint('review', __name__)


@review_routes.route('/', methods=['POST'])
def search():
    data = request.get_json()
    print('______________')
    print('______________')
    print('______________')
    print('______________')
    print(data)
    property_id = data["property_id"]
    reviewer_id = current_user.id
    cleanliness = data["cleanliness"]
    communication = data["communication"]
    check_in = data["check_in"]
    accuracy = data["accuracy"]
    location = data["location"]
    overall_value = data["overall_value"]
    review = data["review"]
    new_review = Review(
        property_id=property_id,
        reviewer_id=reviewer_id,
        cleanliness=cleanliness,
        communication=communication,
        check_in=check_in,
        accuracy=accuracy,
        location=location,
        overall_value=overall_value,
        review=review
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify('DONE!')
