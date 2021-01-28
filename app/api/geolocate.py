from geopy.geocoders import Nominatim, GoogleV3
geolocator = Nominatim(user_agent="CollegeBnB")

def find_coordinates(location):
  geolocation = geolocator.geocode(location)
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  print(geolocation[0])
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  print('--------------------------')
  response = {"latitude":geolocation.latitude, "longitude":geolocation.longitude}
  return response
