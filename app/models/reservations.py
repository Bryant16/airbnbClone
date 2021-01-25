from .db import db, User, Property

class Reservation(db.Model):
  __tablename__ = "reservations"

  id = db.Column(db.Integer, primary_key=True)
  guest_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
  property_id = db.Column(db.Integer, db.ForeignKey(Property.id), nullable=False)
  date = db.Column(db.DateTime, db.ForeignKey(Property.id), nullable=False)
  property = db.relationship(Property, back_populates="reservations")
  guest = db.relationship(User, back_populates="reservations")
