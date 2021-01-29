from werkzeug.security import generate_password_hash
from app.models import db, School

# Adds a demo user, you can add other users here if you want


def seed_schools():
    montclair = School(name='Montclair State University', logo_id=21,
                       latitude=40.864235224079394, longitude=-74.1985918444289)
    tcnj = School(name='TCNJ', logo_id=22,
                  latitude=40.268512677240786, longitude=-74.7769878969077)
    rowan = School(name='Rowan University', logo_id=23,
                   latitude=39.71020663560062, longitude=-75.11956089440088)
    sch1 = School(logo_id=24, name='Johns Hopkins University',
                  latitude=39.328888, longitude=-76.620277)
    sch2 = School(logo_id=25, name='Utah Valley University',
                  latitude=40.277779, longitude=-111.713890)
    sch3 = School(logo_id=26, name='Indiana University of Pennsylvania',
                  latitude=40.617001, longitude=-79.160004)
    sch4 = School(logo_id=27, name='University of Illinois',
                  latitude=40.110558, longitude=-88.228333)
    sch5 = School(logo_id=28, name='Massachusetts Institute of Technology',
                  latitude=42.360001, longitude=-71.092003)
    sch6 = School(logo_id=29, name='Stanford University',
                  latitude=37.428230, longitude=-122.168861)
    sch7 = School(logo_id=30, name='Harvard University',
                  latitude=42.374443, longitude=-71.116943)
    sch8 = School(logo_id=31, name='California Institute of Technology',
                  latitude=34.138000, longitude=-118.125000)
    sch9 = School(logo_id=32, name='University of Chicago',
                  latitude=41.789722, longitude=-87.599724)
    sch11 = School(logo_id=33, name='Eastern University',
                   latitude=40.051529, longitude=-75.370407)
    sch12 = School(logo_id=34, name='University of Michigan',
                   latitude=42.278046, longitude=-83.738220)
    sch13 = School(logo_id=35, name='The University of Massachusetts',
                   latitude=42.391155,	longitude=-72.526711)
    sch14 = School(logo_id=36, name='Penn State University',
                   latitude=40.798214,	longitude=-77.859909)
    sch15 = School(logo_id=37, name='Lawrence University',
                   latitude=44.260445,	longitude=-88.397713)
    sch16 = School(logo_id=38, name='Quinnipiac', latitude=41.421440,
                   longitude=-72.894005)
    sch18 = School(logo_id=39, name='Villanova University',
                   latitude=40.034901, longitude=-75.337349)
    sch19 = School(logo_id=40, name='Boise State University',
                   latitude=43.603600, longitude=-116.208710)
    sch21 = School(logo_id=41, name='University of North Carolina at Chapel Hill',
                   latitude=35.904613, longitude=-79.046761)

    db.session.bulk_save_objects([montclair, tcnj, rowan, sch1,
                                  sch2,
                                  sch3,
                                  sch4,
                                  sch5,
                                  sch6,
                                  sch7,
                                  sch8,
                                  sch9,
                                  sch11,
                                  sch12,
                                  sch13,
                                  sch14,
                                  sch15,
                                  sch16,
                                  sch18,
                                  sch19,
                                  sch21, ])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_schools():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
