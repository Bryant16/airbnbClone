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
  listing = db.relationship("Property")
  user = db.relationship("User")

  @property
  def average(self):
    ratings = [self.cleanliness, self.communication, self.check_in, self.accuracy, self.location, self.overall_value];
    return sum(ratings)/len(ratings)

  def to_dict(self):
    return {
      'id': self.id,
      'property_id': self.property_id,
      'reviewer_id': self.reviewer_id,
      'cleanliness': self.cleanliness,
      'communication': self.communication,
      'check_in': self.check_in,
      'accuracy': self.accuracy,
      'location': self.location,
      'overall_value': self.overall_value,
      'review': self.review,
      'average': self.average
    }
