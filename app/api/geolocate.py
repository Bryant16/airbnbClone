from geopy.geocoders import Nominatim, GoogleV3
geolocator = Nominatim(user_agent="CollegeBnB")

def find_coordinates(location):
  geolocation = geolocator.geocode(location)
  response = {"latitude":geolocation.latitude, "longitude":geolocation.longitude}
  return response
