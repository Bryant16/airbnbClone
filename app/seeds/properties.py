from app.models import db, Property
from faker import Faker
fake = Faker()


def seed_properties():
    for i in range(1,21):
        local = fake.local_latlng()
        db.session.add(Property(
            owner_id= 1 ,
            coverphoto_id = i,
            private = True,
            nightly_rate_usd= 20.00 * i,
            address1 = fake.address(),
            city= local[2],
            zip_code= 00000,
            latitude=local[0],
            longitude=local[1],
            listing_title =fake.sentence(nb_words=10, variable_nb_words=False),
            description= fake.sentence(nb_words=15, variable_nb_words=False),
            check_in= 1500,
            check_out= 0000,
            guest_spots=i ,
        ))
        db.session.commit()
 

def undo_properties():
    db.session.execute('TRUNCATE properties;')
    db.session.commit()
