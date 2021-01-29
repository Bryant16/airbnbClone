from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="CollegeBnB")

def find_coordinates(location):
  geolocation = geolocator.geocode(location)
  response = {"latitude":geolocation.latitude, "longitude":geolocation.longitude}
  return response
