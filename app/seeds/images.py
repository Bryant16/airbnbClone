from app.models import db, Image


def seed_images():

    montclair = Image(URL='https://montclairathletics.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/3/24/Primary.jpg')
    njit = Image(URL="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/New_Jersey_IT_seal.svg/1200px-New_Jersey_IT_seal.svg.png")
    rowan = Image(URL="https://www.ivyrehab.com/wp-content/uploads/2020/02/rowan-university.png")
    property1 = Image(URL="https://a0.muscache.com/im/pictures/0ac5b610-bdbc-4d96-84bd-f7a134c18d59.jpg")
    property2 = Image(URL="https://a0.muscache.com/im/pictures/11a2086a-e8f3-4a12-9303-e11fb715a1d6.jpg")
    property3 = Image(URL="https://a0.muscache.com/im/pictures/85f2ea2d-fd10-48d3-b89c-b4f8d364ab77.jpg")


    db.session.add([montclair, njit, rowan, property1, property2, property3])

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images;')
    db.session.commit()
