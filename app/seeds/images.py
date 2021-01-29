from app.models import db, Image


def seed_images():
    property1 = Image(
        URL="https://a0.muscache.com/im/pictures/0ac5b610-bdbc-4d96-84bd-f7a134c18d59.jpg")
    property2 = Image(
        URL="https://a0.muscache.com/im/pictures/11a2086a-e8f3-4a12-9303-e11fb715a1d6.jpg")
    property3 = Image(URL="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/dn9JmbyHvw0DTUWlpE8V9Z0K4lU=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/S4ZX2DV7BZDW5HW54OMMISE4Y4.jpg")
    property4 = Image(
        URL="https://cdngeneral.rentcafe.com/dmslivecafe/3/509605/Avant-Apartments-Parking-Garage-Entrance-Carmel,-Indiana_WEB.jpg?quality=85&scale=both&")
    property5 = Image(URL="https://images.squarespace-cdn.com/content/v1/5ecdab0a27eb1f230be656e6/1591749677023-LINNELBITLVLDI6QAQWR/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/01-Standard+Apartments-018.jpg?format=2500w")
    property6 = Image(
        URL="https://images1.apartments.com/i2/0QoBEfsI2kfvJt8frk0S4vUxvPWSCCRED06kkmpLPzU/111/the-standard-per-bed-leases-saint-louis-mo-primary-photo.jpg")
    property7 = Image(
        URL="https://rentpath-res.cloudinary.com/w_277,h_191,t_rp,cs_tinysrgb,fl_force_strip,c_fill,e_improve,f_auto/e_unsharp_mask:50,q_auto/6d4638a53b046404d0c8ca5d657670e9")
    property8 = Image(
        URL="https://rentpath-res.cloudinary.com/w_277,h_191,t_rp,cs_tinysrgb,fl_force_strip,c_fill,e_improve,f_auto/e_unsharp_mask:50,q_auto/046d31fc33be8e803354f6f7834c397e")
    property9 = Image(
        URL="https://images1.apartmenthomeliving.com/i2/8s_LRRfb-xFY5aIl0Xc5gLLU8GRDdvUvVxebmKRPmNw/106/image.jpg")
    property10 = Image(
        URL="https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2020/07/studio-apartments-social.jpg")
    property11 = Image(
        URL="https://photos.zillowstatic.com/fp/52075f26c2333c8ad50cdb5ec68f5080-p_e.jpg")
    property12 = Image(
        URL="https://cdngeneral.rentcafe.com/dmslivecafe/3/868916/Reliable_Interiors_02.jpg?crop=(0,14,300,205.25000000000028)&cropxunits=300&cropyunits=208&quality=85&scale=both&")
    property13 = Image(
        URL="https://medialibrarycdn.entrata.com/media_library/1715/5dde8ea8e02a07.07327544849.jpg")
    property14 = Image(
        URL="https://media-cdn.tripadvisor.com/media/photo-m/1280/17/2b/d7/8f/the-miro-apartments.jpg")
    property15 = Image(
        URL="https://images1.apartments.com/i2/QXrOPFeW1b-em5PR_I3yNdDgtvlhO5fvdO_Mvrwl9iU/117/image.jpg")
    property16 = Image(
        URL="https://wcsmith.com/wp-content/uploads/2016/01/The-Dahlia-Apartments-Takoma-DC-For-Rent-Studio-Living-Space-1-1024x576.jpg")
    property17 = Image(
        URL="https://1-aegir0-camdenliving-com45.s3.amazonaws.com/community/camden-crown-valley/headers/camden-crown-valley-apartments-mission-viejo-ca-kitchen-and-living-room.jpg")
    property18 = Image(URL="https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_165,h_2640,w_4400,c_crop/q_auto,f_auto,c_fill,g_center,h_1200,w_2000/v1547060730/g5/g5-c-5g13txeqo-mark-taylor-companies-client/g5-cl-1ilppjz7kx-aviva/uploads/18-037-24_Fire_Pit_Area_efyaf4.jpg")
    property19 = Image(
        URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQQoVpHjZ7_IFOHmZmcG3GxsKLL3eehOssPQ&usqp=CAU")
    property20 = Image(
        URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4apdgQnn4YKHD9keoVsNhp87oG6nVA9okg&usqp=CAU")
    montclair = Image(
        URL='https://montclairathletics.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2020/3/24/Primary.jpg')
    njit = Image(
        URL="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/New_Jersey_IT_seal.svg/1200px-New_Jersey_IT_seal.svg.png")
    rowan = Image(
        URL="https://www.ivyrehab.com/wp-content/uploads/2020/02/rowan-university.png")
    jhu = Image(URL="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrand.jhu.edu%2Funiversity-logo%2F&psig=AOvVaw3FiTPdZH28WDm8g_emC5HF&ust=1611979773201000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDC8uCiwO4CFQAAAAAdAAAAABAD")
    ut = Image(
        URL="https://www.uvu.edu/marketing/images/logos/full__0006_branding_horizontal.png")
    i = Image(URL="https://brand.iu.edu/images/resources-trident.jpg")
    ill = Image(URL="https://cdn.vox-cdn.com/thumbor/FGgViEqt2ML--Uxw1Pu6Gw4rV8o=/0x0:800x400/1200x800/filters:focal(336x136:464x264)/cdn.vox-cdn.com/uploads/chorus_image/image/56187479/DHNkdRfXoAEp2VD.0.jpg")
    mass = Image(
        URL="https://base.imgix.net/files/base/ebm/asumag/image/2019/04/asumag_8781_mit_logo.png?auto=format&fit=crop&h=432&w=768")
    stan = Image(
        URL="https://web.stanford.edu/group/webdev/identity/public/img/block-s-2color.png")
    har = Image(
        URL="https://i.pinimg.com/originals/12/57/f1/1257f17135960b8f05f881010a79b143.jpg")
    cit = Image(URL="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Seal_of_the_California_Institute_of_Technology.svg/1200px-Seal_of_the_California_Institute_of_Technology.svg.png")
    chi = Image(URL="https://www.chicagotribune.com/resizer/nkJIB_vMkExSSNXtPlPhQk3uVno=/800x800/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/JKFTJDQX7VEQ7N3FVURGEMRHHQ.jpg")
    ea = Image(URL="data:image/png;base64,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")
    um = Image(
        URL="https://umich.edu/skins/um2013/media/images/U-M-logo-preview.jpg")
    umas = Image(
        URL="https://www.wamc.org/sites/wamc/files/201608/umassamherst.png")
    penn = Image(
        URL="https://i.pinimg.com/originals/af/25/da/af25daf8bce653ec9eaca859569d360d.png")
    law = Image(
        URL="https://i.pinimg.com/originals/c1/4a/3d/c14a3d3626f2269d717cf1871a284db1.jpg")
    qu = Image(URL="https://gobobcats.com/common/controls/image_handler.aspx?thumb_id=13&image_path=/images/2017/12/15/Growler_Halo.png")
    vil = Image(URL="https://www1.villanova.edu/content/villanova/unicommunication/brandguidelines/UniversityLogosandHierarchy/university-logo-examples/_jcr_content/pagecontent/imagegallery_1514176008/imageGalleryPar/image_1579638630.no.size.img.jpg")
    bo = Image(
        URL="https://d2jyir0m79gs60.cloudfront.net/college/logos/Boise_State_University.jpg")
    unc = Image(URL="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/973px-North_Carolina_Tar_Heels_logo.svg.png")

    db.session.bulk_save_objects([property1, property2, property3, property4, property5, property6, property7, property8, property9, property10, property11, property12, property13, property14, property15, property16, property17, property18, property19, property20, montclair, njit, rowan, jhu,
                                  ut,
                                  i,
                                  ill,
                                  mass,
                                  stan,
                                  har,
                                  cit,
                                  chi,
                                  ea,
                                  um,
                                  umas,
                                  penn,
                                  law,
                                  qu,
                                  vil,
                                  bo,
                                  unc, ])

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images;')
    db.session.commit()
