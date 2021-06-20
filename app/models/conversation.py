from .db import db
from .conversations_users import conversations_users


class Conversation(db.Model):
  __tablename__ = 'conversations'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(50))

  users = db.relationship('User', secondary=conversations_users, backref='conversations')
