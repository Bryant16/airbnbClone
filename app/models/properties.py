from .db import db
from .images import Image
from .reviews import Review
from .schools_properties import schools_properties
from .properties_images import properties_images

class Property(db.Model):
  __tablename__ = 'properties'

  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  coverphoto_id = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=True)
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
  # images = db.relationship("Image")             # ??? maybe need this
  user = db.relationship("User")
  reservations = db.relationship("Reservation")
  photos = db.relationship("Image", secondary=properties_images)
  reviews = db.relationship("Review")
  schools = db.relationship("School", secondary=schools_properties)

  @property
  def rating(self):
    averages = [review.average for review in self.reviews]
    return sum(averages)/(len(averages) if averages else 1)

  @property
  def to_dict(self):

    return {
      "id":self.id,
      "owner_id": self.owner_id,
      "coverphoto_url": Image.query.get(self.coverphoto_id).URL,
      "private": self.private,
      "nightly_rate_usd": self.nightly_rate_usd,
      "address1": self.address1,
      "address2": self.address2,
      "city": self.city,
      "zip_code": self.zip_code,
      "longitude": self.longitude,
      "latitude": self.latitude,
      "listing_title": self.listing_title,
      "description": self.description,
      "check_in": self.check_in,
      "check_out": self.check_out,
      "guest_spots": self.guest_spots,
      "reservations": [reservation.to_dict for reservation in self.reservations],
      'reviews': [review.to_dict() for review in self.reviews],
      "rating": self.rating
    }
