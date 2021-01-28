from .db import db

class Reservation(db.Model):
  __tablename__ = "reservations"
  id = db.Column(db.Integer, primary_key=True)
  guest_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  property_id = db.Column(db.Integer, db.ForeignKey("properties.id"), nullable=False)
  date = db.Column(db.DateTime, nullable=False)
  numGuests = db.Column(db.Integer, nullable=False)
  listing = db.relationship("Property")
  user = db.relationship("User")

  @property
  def to_dict(self):
    return {
      "id": self.id,
      "guest_id": self.guest_id,
      "property_id": self.property_id,
      "date": self.date
    }
