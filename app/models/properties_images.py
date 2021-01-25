from .db import db

properties_images = db.Table(
  "properties_images",
  db.Column(
    "property_id",
    db.Integer,
    db.ForeignKey("properties.id"),
    primary_key=True
  ),
  db.Column(
    "image_id",
    db.Integer,
    db.ForeignKey("images.id"),
    primary_key=True
  )
)
