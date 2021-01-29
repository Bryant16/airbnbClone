from app.models import db, Review
from random import randint
from faker import Faker
fake = Faker()


def seed_reviews():
    for i in range(20):
        db.session.add(Review(
            property_id=randint(0,20),
            reviewer_id = randint(0,8),
            cleanliness= randint(0,5),
            communication= randint(0,5),
            check_in= randint(0,5),
            accuracy= randint(0,5),
            location= randint(0,5),
            overall_value= randint(0,5),
            review= fake.sentence(nb_words=15, variable_nb_words=False)
        ))
        db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()