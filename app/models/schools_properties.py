from .db import db

schools_properties = db.Table(
  "schools_properties",
  db.Column(
    "school_id",
    db.Integer,
    db.ForeignKey("schools.id"),
    primary_key=True
  ),
  db.Column(
    "property_id",
    db.Integer,
    db.ForeignKey("properties.id"),
    primary_key=True
  )
)
