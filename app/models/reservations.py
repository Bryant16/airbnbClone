from .db import db

class Reservation(db.Model):
  __tablename__ = "reservations"
  id = db.Column(db.Integer, primary_key=True)
  guest_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  property_id = db.Column(db.Integer, db.ForeignKey("properties.id"), nullable=False)
  date = db.Column(db.DateTime, nullable=False)
  date_range = db.Column(db.String, nullable=False)
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

  def to_summary(self):
    return {
      **self.to_dict,
      'date_range': self.date_range,
      'city': self.listing.to_dict['city'],
      'property_photo_url': self.listing.to_dict['coverphoto_url']
    }
