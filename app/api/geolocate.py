from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="CollegeBnB")

def find_coordinates(location):
  try:
    geolocation = geolocator.geocode(location)
    return {"latitude":geolocation.latitude, "longitude":geolocation.longitude}
  except:
    return None
