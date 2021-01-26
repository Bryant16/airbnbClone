from werkzeug.security import generate_password_hash
from app.models import db, School

# Adds a demo user, you can add other users here if you want
def seed_schools(): 
    montclair = School(name='Montclair State University',logo_id=21,latitude=40.864235224079394,longitude=-74.1985918444289,)
    tcnj = School(name='TCNJ',logo_id=22,latitude=40.268512677240786,longitude=-74.7769878969077,)
    rowan = School(name='Rowan University',logo_id=23,latitude=39.71020663560062,longitude=-75.11956089440088,)

    db.session.bulk_save_objects([montclair, tcnj,rowan])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_schools():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
