from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(username='Demo', email='demo@aa.io',
                password='password')

    admin = User(username="Admin", email="admin@aa.io",
                password="SeptCohort2020!")
    user1 = User(username="User1", email="user1@aa.io",
                password="SeptCohort2020!")
    bry = User(username="bry", email="bry@aa.io",
                password="SeptCohort2020!")
    James = User(username="James", email="James@aa.io",
                password="SeptCohort2020!")
    JM = User(username="JM", email="JM@aa.io",
                password="SeptCohort2020!")
    Andrew = User(username="Andrew", email="Andrew@aa.io",
                password="SeptCohort2020!")
    user2 = User(username="User2", email="user2@aa.io",
                password="SeptCohort2020!")
    
    db.session.bulk_save_objects([demo, admin, user1,bry,James,JM,Andrew,user2])

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
