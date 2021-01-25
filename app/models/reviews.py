from .db import db, Property, User


class Review(db.Model):
  __tablename__ = "reviews"

  id = db.Column(db.Integer, primary_key=True)
  property_id = db.Column(db.Integer, db.ForeignKey(Property.id), nullable=False)
  reviewer_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
  cleanliness = db.Column(db.Integer, nullable=False)
  communication = db.Column(db.Integer, nullable=False)
  check_in = db.Column(db.Integer, nullable=False)
  accuracy = db.Column(db.Integer, nullable=False)
  location = db.Column(db.Integer, nullable=False)
  overall_value = db.Column(db.Integer, nullable=False)
  review = db.Column(db.Text, nullable=False)
  
  property = db.relationship(Property, back_populates="reviews")
  reviewer = db.relationship(User, back_populates="reviews")
