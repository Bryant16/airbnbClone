from werkzeug.security import generate_password_hash
from app.models import db, School

# Adds a demo user, you can add other users here if you want


def seed_schools():
    montclair = School(name='Montclair State University', logo_id=21,
                       latitude=40.864235224079394, longitude=-74.1985918444289,)
    tcnj = School(name='TCNJ', logo_id=22,
                  latitude=40.268512677240786, longitude=-74.7769878969077,)
    rowan = School(name='Rowan University', logo_id=23,
                   latitude=39.71020663560062, longitude=-75.11956089440088,)
    sch1 = School(name='Johns Hopkins University',
                  latitude=39.328888	, longitude=-76.620277)
    sch2 = School(name='Utah Valley University',
                  latitude=40.277779	, longitude=-111.713890)
    sch3 = School(name='Indiana University of Pennsylvania',
                  latitude=40.617001	, longitude=-79.160004)
    sch4 = School(name='University of Illinois',
                  latitude=40.110558	, longitude=-88.228333)
    sch5 = School(name='Massachusetts Institute of Technology',
                  latitude=42.360001	, longitude=-71.092003)
    sch6 = School(name='Stanford University',
                  latitude=37.428230	, longitude=-122.168861)
    sch7 = School(name='Harvard University'	,
                  latitude=42.374443	, longitude=-71.116943)
    sch8 = School(name='California Institute of Technology',
                  latitude=34.138000	, longitude=-118.125000)
    sch9 = School(name='University of Chicago'	,
                  latitude=41.789722	, longitude=-87.599724)
    sch11 = School(name='Eastern University'	,
                   latitude=40.051529	, longitude=-75.370407)
    sch12 = School(name='University of Michigan'	,
                   latitude=42.278046	, longitude=-83.738220)
    sch13 = School(name='The University of Massachusetts'	,
                   latitude=42.391155,	longitude=-72.526711)
    sch14 = School(name='Penn State University',
                   latitude=40.798214,	longitude=-77.859909)
    sch15 = School(name='Lawrence University'	,
                   latitude=44.260445,	longitude=-88.397713)
    sch16 = School(name='Quinnipiac', latitude=41.421440	,
                   longitude=-72.894005)
    sch17 = School(name='Towsley Center for Continuing Medical Education'	,
                   latitude=42.283833	, longitude=-83.728043)
    sch18 = School(name='Villanova University',
                   latitude=40.034901	, longitude=-75.337349)
    sch19 = School(name='Boise State University',
                   latitude=43.603600	, longitude=-116.208710)
    sch20 = School(name='University of Washington'	,
                   latitude=47.655548	, longitude=-122.303200)
    sch21 = School(name='University of North Carolina at Chapel Hill',
                   latitude=35.904613, longitude=-79.046761)
    sch22 = School(name='Madonna University',
                   latitude=42.384148	, longitude=-83.402824)
    sch23 = School(name='University of California',
                   latitude=34.413963,	longitude=-119.848946)
    sch24 = School(name='Brown University'	,
                   latitude=41.826820	, longitude=-71.402931)
    sch25 = School(name='Arizona State University'	,
                   latitude=33.424564,	longitude=-111.928001)
    sch26 = School(name='University of Arizona',
                   latitude=32.248814	, longitude=-110.987419)
    sch27 = School(name='The University of Alabama',
                   latitude=33.215775	, longitude=-87.538261)
    sch28 = School(name='University of Nebraska'	,
                   latitude=40.820744	, longitude=-96.700470)
    sch29 = School(name='Texas Tech University Law Library',
                   latitude=33.579166,	longitude=-101.886909)
    sch30 = School(name='University of Central Missouri',
                   latitude=38.758034	, longitude=-93.739136)
    sch31 = School(name='The University of Georgia',
                   latitude=33.948006,	longitude=-83.377319)
    sch32 = School(name='Texas A&M University',
                   latitude=30.615011	, longitude=-96.342476)
    sch33 = School(name='San Diego State University',
                   latitude=32.774799	, longitude=-117.071869)
    db.session.bulk_save_objects([montclair, tcnj, rowan])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_schools():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
