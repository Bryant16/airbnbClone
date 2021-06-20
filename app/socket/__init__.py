from flask_socketio import SocketIO
from os import environ

origins = environ.get('SOCKET_CORS_ORIGINS')

# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)
