from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .properties import Property

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable=False)
  properties = db.relationship("Property")
  reservations = db.relationship("Reservation")

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }

  def to_owner(self):
    return {
      **self.to_dict(),
      "properties": [prop.to_summary for prop in self.properties]
    }

  def to_guest(self):
    return {
      **self.to_dict(),
      "reservations": [res for res in self.reservations]
    }
