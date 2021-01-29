from app.models import db, Image


def seed_images():
    property1 = Image(URL="https://a0.muscache.com/im/pictures/0ac5b610-bdbc-4d96-84bd-f7a134c18d59.jpg")
    property2 = Image(URL="https://a0.muscache.com/im/pictures/11a2086a-e8f3-4a12-9303-e11fb715a1d6.jpg")
    property3 = Image(URL="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg")
    property4 = Image(URL="https://cdngeneral.rentcafe.com/dmslivecafe/3/509605/Avant-Apartments-Parking-Garage-Entrance-Carmel,-Indiana_WEB.jpg?quality=85&scale=both&")
    property5 = Image(URL="https://images.squarespace-cdn.com/content/v1/5ecdab0a27eb1f230be656e6/1591749677023-LINNELBITLVLDI6QAQWR/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/01-Standard+Apartments-018.jpg?format=2500w")
    property6 = Image(URL="https://images1.apartments.com/i2/0QoBEfsI2kfvJt8frk0S4vUxvPWSCCRED06kkmpLPzU/111/the-standard-per-bed-leases-saint-louis-mo-primary-photo.jpg")
    property7 = Image(URL="https://rentpath-res.cloudinary.com/w_277,h_191,t_rp,cs_tinysrgb,fl_force_strip,c_fill,e_improve,f_auto/e_unsharp_mask:50,q_auto/6d4638a53b046404d0c8ca5d657670e9")
    property8 = Image(URL="https://rentpath-res.cloudinary.com/w_277,h_191,t_rp,cs_tinysrgb,fl_force_strip,c_fill,e_improve,f_auto/e_unsharp_mask:50,q_auto/046d31fc33be8e803354f6f7834c397e")
    property9 = Image(URL="https://images1.apartmenthomeliving.com/i2/8s_LRRfb-xFY5aIl0Xc5gLLU8GRDdvUvVxebmKRPmNw/106/image.jpg")
    property10 = Image(URL="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/07/studio-apartments-social.jpg")
    property11 = Image(URL="https://photos.zillowstatic.com/fp/52075f26c2333c8ad50cdb5ec68f5080-p_e.jpg")
    property12 = Image(URL="https://cdngeneral.rentcafe.com/dmslivecafe/3/868916/Reliable_Interiors_02.jpg?crop=(0,14,300,205.25000000000028)&cropxunits=300&cropyunits=208&quality=85&scale=both&")
    property13 = Image(URL="https://medialibrarycdn.entrata.com/media_library/1715/5dde8ea8e02a07.07327544849.jpg")
    property14 = Image(URL="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2b/d7/8f/the-miro-apartments.jpg")
    property15 = Image(URL="https://images1.apartments.com/i2/QXrOPFeW1b-em5PR_I3yNdDgtvlhO5fvdO_Mvrwl9iU/117/image.jpg")
    property16 = Image(URL="https://wcsmith.com/wp-content/uploads/2016/01/The-Dahlia-Apartments-Takoma-DC-For-Rent-Studio-Living-Space-1-1024x576.jpg")
    property17 = Image(URL="https://1-aegir0-camdenliving-com45.s3.amazonaws.com/community/camden-crown-valley/headers/camden-crown-valley-apartments-mission-viejo-ca-kitchen-and-living-room.jpg")
    property18 = Image(URL="https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_165,h_2640,w_4400,c_crop/q_auto,f_auto,c_fill,g_center,h_1200,w_2000/v1547060730/g5/g5-c-5g13txeqo-mark-taylor-companies-client/g5-cl-1ilppjz7kx-aviva/uploads/18-037-24_Fire_Pit_Area_efyaf4.jpg")
    property19 = Image(URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQoVpHjZ7_IFOHmZmcG3GxsKLL3eehOssPQ&usqp=CAU")
    property20 = Image(URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4apdgQnn4YKHD9keoVsNhp87oG6nVA9okg&usqp=CAU")
    montclair = Image(URL='https://montclairathletics.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/3/24/Primary.jpg')
    njit = Image(URL="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/New_Jersey_IT_seal.svg/1200px-New_Jersey_IT_seal.svg.png")
    rowan = Image(URL="https://www.ivyrehab.com/wp-content/uploads/2020/02/rowan-university.png")
    jhu= Image(URL="")

    db.session.bulk_save_objects([property1,property2,property3,property4,property5,property6,property7,property8,property9,property10,property11,property12,property13,property14,property15,property16,property17,property18,property19,property20,montclair, njit, rowan])

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images;')
    db.session.commit()
