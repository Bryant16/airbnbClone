from .db import db

class School(db.Model):
  __tablename__ = 'schools'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  logo_id = db.Column(db.Integer, db.ForeignKey("images.id"), nullable=False)
  longitude = db.Column(db.Float, nullable=False)
  latitude = db.Column(db.Float, nullable=False)
  image = db.relationship("Image", back_populates="school")
  property = db.relationship("Property", back_populates="schools")
