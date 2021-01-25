from .db import db
from .properties_images import properties_images

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column(db.Integer, primary_key=True)
  URL = db.Column(db.String, nullable=False)
  properties = db.relationship("Property", secondary=properties_images)
