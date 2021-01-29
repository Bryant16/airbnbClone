from app.models import db, Review


def seed_reviews():
    
def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()