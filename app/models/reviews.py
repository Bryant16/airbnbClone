from .db import db


class Review(db.Model):
  __tablename__ = "reviews"

  id = db.Column(db.Integer, primary_key=True)
  property_id = db.Column(db.Integer, db.ForeignKey("properties.id"), nullable=False)
  reviewer_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  cleanliness = db.Column(db.Integer, nullable=False)
  communication = db.Column(db.Integer, nullable=False)
  check_in = db.Column(db.Integer, nullable=False)
  accuracy = db.Column(db.Integer, nullable=False)
  location = db.Column(db.Integer, nullable=False)
  overall_value = db.Column(db.Integer, nullable=False)
  review = db.Column(db.Text, nullable=False)
  property = db.relationship("Property")
  user = db.relationship("User")
