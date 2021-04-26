from app.models import db, Review
from random import randint
from faker import Faker
fake = Faker()


def seed_reviews():
    for i in range(1,600):
        db.session.add(Review(
            property_id=randint(1,102),
            reviewer_id = randint(1,8),
            cleanliness= randint(2,5),
            communication= randint(2,5),
            check_in= randint(2,5),
            accuracy= randint(2,5),
            location= randint(2,5),
            overall_value= randint(2,5),
            review= fake.sentence(nb_words=15, variable_nb_words=False)
        ))
        db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
