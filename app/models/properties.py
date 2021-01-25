from .db import db

class Property(db.Model):
  __tablename__ = 'properties'

  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  cover_photo_id = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=True)
  private = db.Column(db.Boolean, nullable=False)
  nightly_rate_usd = db.Column(db.Float, nullable=False)
  address1 = db.Column(db.String, nullable=False)               # address line 1
  address2 = db.Column(db.String, nullable=True)                # address line 2
  city = db.Column(db.String, nullable=False)
  zip_code = db.Column(db.Integer, nullable=False)
  longitude = db.Column(db.Float, nullable=False)
  latitude = db.Column(db.Float, nullable=False)
  listing_title = db.Column(db.String(100), nullable=False)
  description = db.Column(db.Text, nullable=False)
  check_in = db.Column(db.Integer, nullable=False)
  check_out = db.Column(db.Integer, nullable=False)
  guest_spots = db.Column(db.Integer, nullable=False)
  images = db.relationship("Image", back_populates="property")
  user = db.relationship("User", back_populates="properties")
  reservations = db.relationship("Reservation", back_populates="property")
  reviews = db.relationship("Review", back_populates="property")
  schools = db.relationship("School", back_populates="properties")
