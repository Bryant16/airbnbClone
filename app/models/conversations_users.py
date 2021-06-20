from .db import db


conversations_users = db.Table(
  'conversations_users',
  db.Column(
    'user_id',
    db.Integer,
    db.ForeignKey('users.id'),
    primary_key = 'true'
  ),
  db.Column(
    'conversation_id',
    db.Integer,
    db.ForeignKey('conversations.id'),
    primary_key = 'true'
  )
)
