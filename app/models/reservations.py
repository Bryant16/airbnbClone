from .db import db

class Reservation(db.Model):
  __tablename__ = "reservations"

  id = db.Column(db.Integer, primary_key=True)
  guest_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  property_id = db.Column(db.Integer, db.ForeignKey("properties.id"), nullable=False)
  date = db.Column(db.DateTime, nullable=False)
  property = db.relationship("Property")
  user = db.relationship("User")
