from flask.cli import AppGroup
from .users import seed_users, undo_users
from .images import seed_images, undo_images
from .properties import seed_properties, undo_properties
from .school import seed_schools, undo_schools

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_images()
    seed_properties()
    seed_schools()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_images()
    undo_properties()
    undo_schools()
    # Add other undo functions here
