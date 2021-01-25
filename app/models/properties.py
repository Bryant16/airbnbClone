from .db import db, User

class Property(db.Model):
  __tablename__ = 'properties'

  id = db.Column(db.Integer, primary_key=True)
  owner_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
  cover_photo = db.Column(db.String, nullable=True)
  school_name = db.Column(db.String, nullable=True)
  rate = db.Column(db.Float, nullable=False)
  longitude = db.Column(db.Float, nullable=False)
  latitude = db.Column(db.Float, nullable=False)
  address = db.Column(db.String, nullable=False)
  description = db.Column(db.Text, nullable=False)
  check_in = db.Column(db.DateTime, nullable=False)
  check_out = db.Column(db.DateTime, nullable=False)
  owner = db.relationship(User, back_populates="properties")
