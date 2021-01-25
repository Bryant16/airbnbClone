from .db import db

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column(db.Integer, primary_key=True)
  URL = db.Column(db.String, nullable=False)
  property = db.relationship("Property", back_populates="images")
  school = db.relationship("School", back_populates="image")
