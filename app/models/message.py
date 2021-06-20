from .db import db


class Message(db.Model):
  __tablename__ = 'messages'

  id = db.Column(db.Integer, primary_key=True)
  sender_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  conversation_id = db.Column(db.Integer, db.ForeignKey('conversations.id'), nullable=False)
  content = db.Column(db.Text, nullable=False)
  
  sender = db.relationship('User', backref='messages')
  conversation = db.relationship('Conversation', backref='messages')

  def to_dict(self):
    return {
      'id': self.id,
      'sender': self.sender.to_dict(),
      'content': self.content
    }
