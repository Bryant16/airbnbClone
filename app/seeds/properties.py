from app.models import db, Property
from faker import Faker
fake = Faker()


def geo_date():
        print(fake.local_latlng())

geo_date()

def seed_properties():
    pass

    # demo = Property(owner_id='Demo', coverphoto_id='demo@aa.io',
    #                 private='password', nightly_rate_usd=n/a, )

    # admin = Property(username="Admin", email="admin@aa.io",
    #             password="SeptCohort2020!")

    # db.session.add([])

    # db.session.commit()


def undo_properties():
    db.session.execute('TRUNCATE properties;')
    db.session.commit()
