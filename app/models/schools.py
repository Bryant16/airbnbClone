from .db import db
from .images import Image
from .schools_properties import schools_properties


class School(db.Model):
  __tablename__ = 'schools'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  logo_id = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)
  longitude = db.Column(db.Float, nullable=False)
  latitude = db.Column(db.Float, nullable=False)
  image = db.relationship("Image")
  properties = db.relationship("Property",
  secondary=schools_properties)


  @property
  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "logo_url": Image.query.get(self.logo_id).URL,
      "longitude": self.longitude,
      "latitude": self.latitude
    }
