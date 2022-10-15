from turtle import mode
from django.db import models


# ================================ Admin Objects ================================


class AdminOrganization(models.Model):
    name = models.CharField(max_length=100)
    add1 = models.CharField(max_length=100,null=True)
    add2 = models.CharField(max_length=100,null=True)
    city = models.CharField(max_length=100,null=True)
    state = models.CharField(max_length=100,null=True)
    country = models.CharField(max_length=100,null=True)
    landline = models.CharField(max_length=100,null=True)
    mobile = models.CharField(max_length=100,null=True)
    email = models.CharField(max_length=100,null=True)
    gst = models.CharField(max_length=100,null=True)
    facebook = models.CharField(max_length=100,null=True)
    youtube = models.CharField(max_length=100,null=True)
    linkedin = models.CharField(max_length=100,null=True)
    twitter = models.CharField(max_length=100,null=True)
    whatsappno = models.CharField(max_length=100,null=True)
    instagram = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'adminorganization'


class AdminRole(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=1)

    class Meta:
        db_table = 'adminrole'


class AdminUser(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=1)

    class Meta:
        db_table = 'adminuser'


class AdminUserRole(models.Model):
    userid = models.IntegerField()
    roleid = models.IntegerField()
    status = models.CharField(max_length=1)

    class Meta:
        db_table = 'adminuserrole'


class AdminTestmonial(models.Model):
    title = models.CharField(max_length=100)
    photoid = models.IntegerField(null=True)
    statement = models.CharField(max_length=512,null=True)
    comment = models.CharField(max_length=1024,null=True)

    class Meta:
        db_table = 'admintestmonial'


class AdminService(models.Model):
    name = models.CharField(max_length=100)
    status = models.CharField(max_length=1)

    class Meta:
        db_table = 'adminservice'


class AdminServiceGeoCoverage(models.Model):
    serviceid = models.IntegerField()
    statecd = models.CharField(max_length=2)
    districtid = models.IntegerField()

    class Meta:
        db_table = 'adminservicegeocoverage'


class AdminsComEtaKeys(models.Model):
    page = models.CharField(max_length=100)
    keywords = models.CharField(max_length=5000,null=True)

    class Meta:
        db_table = 'adminscometakeys'


class CustomerProfile(models.Model):
    property_user_name = models.CharField(max_length=300)
    contact_name = models.CharField(max_length=300,null=True)
    mobile = models.CharField(max_length=15,null=True)
    email_addr = models.CharField(max_length=150,null=True)
    mobilevalidate = models.CharField(max_length=1,null=True)
    emailvalidate = models.CharField(max_length=1,null=True)
    location = models.CharField(max_length=100,null=True)
    status = models.CharField(max_length=100)

    class Meta:
        db_table = 'customerprofile'


# ================================ Lookup and Transactional objects ================================


class Property(models.Model):
    property_title = models.CharField(max_length=512,null=True)
    property_detail = models.CharField(max_length=4000,null=True)
    location_name = models.CharField(max_length=200,null=True)
    latitute = models.CharField(max_length=50,null=True)
    longtitue = models.CharField(max_length=50,null=True)
    venture_name = models.CharField(max_length=500,null=True)
    owner_name = models.CharField(max_length=200,null=True)
    contact_num1 = models.CharField(max_length=50,null=True)
    contact_num2 = models.CharField(max_length=50,null=True)
    best_time_to_contact = models.CharField(max_length=50,null=True)
    extent_in_acre = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    extent_in_gunta = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    extent_in_sqryrds = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    plinth_area = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    plot_area = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    city_town = models.CharField(max_length=200,null=True)
    village_name = models.CharField(max_length=200,null=True)
    mandal_name = models.CharField(max_length=200,null=True)
    approachroad_id = models.IntegerField(null=True)
    road_size_feet = models.IntegerField(null=True)
    prop_facing_id = models.IntegerField(null=True)
    age_of_property = models.IntegerField(null=True)
    floor_num = models.IntegerField(null=True)
    no_of_floors = models.IntegerField(null=True)
    parking_places = models.CharField(max_length=5,null=True)
    four_weeler_parking = models.IntegerField(null=True)
    two_weeler_parking = models.IntegerField(null=True)
    no_of_bedroom = models.IntegerField(null=True)
    no_of_bathroom = models.IntegerField(null=True)
    offer_price = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    market_price = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    rental_value = models.DecimalField(max_digits=7,decimal_places=2,null=True)
    prop_sub_type_id = models.IntegerField(null=True)
    district_id = models.IntegerField(null=True)
    status_id = models.IntegerField(null=True)
    distance_from_orr = models.IntegerField(null=True)
    distance_from_hyd = models.IntegerField(null=True)
    create_date = models.DateTimeField(null=True)
    update_userid = models.CharField(max_length=30,null=True)
    update_date = models.DateTimeField(null=True)

    class Meta:
        db_table = 'property'
    

class PropertyType(models.Model):
    description = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'propertytype'


class PropertySubType(models.Model):
    proptypeid = models.IntegerField(null=True)
    description = models.CharField(max_length=100,null=True)
    status = models.CharField(max_length=1,null=True)

    class Meta:
        db_table = 'propertysubtype'


class PropertyTitle(models.Model):
    propertyid = models.IntegerField(null=True)
    propertysubtypeid = models.IntegerField(null=True)
    title = models.CharField(max_length=512,null=True)

    class Meta:
        db_table = 'propertytitle'


class PropertyMedia(models.Model):
    property_id = models.IntegerField(null=True)
    mediaid = models.IntegerField(null=True)

    class Meta:
        db_table = 'propertymedia'


class PropertyKnownFor(models.Model):
    description = models.CharField(max_length=100,null=True)
    propertytypeid = models.IntegerField(null=True)
    propertysubtypeid = models.IntegerField(null=True)
    iconid = models.IntegerField(null=True)

    class Meta:
        db_table = 'propertyknownfor'


class PropertyViews(models.Model):
    propertyid = models.IntegerField(null=True)
    propertysubtypeid = models.IntegerField(null=True)
    vieweddate = models.DateTimeField(null=True)
    customerid = models.IntegerField(null=True)

    class Meta:
        db_table = 'propertyviews'


class PropertyLikes(models.Model):
    propertyid = models.IntegerField(null=True)
    propertysubtypeid = models.IntegerField(null=True)
    likeddate = models.DateTimeField(null=True)
    customerid = models.IntegerField(null=True)

    class Meta:
        db_table = 'propertylikes'


class PropertyStatus(models.Model):
    description = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'propertystatus'


class LookupMaster(models.Model):
    master_id = models.IntegerField()
    name = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'lookupmaster'


class Media(models.Model):
    type = models.CharField(max_length=1,null=True)
    url = models.CharField(max_length=500,null=True)
    sizemb = models.IntegerField(null=True)

    class Meta:
        db_table = 'media'


class Icon(models.Model):
    url = models.CharField(max_length=500,null=True)

    class Meta:
        db_table = 'icon'


class Location(models.Model):
    name = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'location'


class LocationHighlight(models.Model):
    description = models.CharField(max_length=100,null=True)
    iconid = models.IntegerField(null=True)

    class Meta:
        db_table = 'locationhighlight'


class LocationPropertyHighlight(models.Model):
    propertyid = models.IntegerField(null=True)
    locationhighlightid = models.IntegerField(null=True)
    mediaid = models.IntegerField(null=True)
    
    class Meta:
        db_table = 'locationpropertyhighlight'


class District(models.Model):
    districtname = models.CharField(max_length=100,null=True)
    statecd = models.CharField(max_length=2,null=True)

    class Meta:
        db_table = 'district'


class State(models.Model):
    statecd = models.CharField(max_length=2,primary_key=True)
    statename = models.CharField(max_length=100,null=True)
    countrycd = models.CharField(max_length=2)

    class Meta:
        db_table = 'state'


class Country(models.Model):
    countrycd = models.CharField(max_length=3,primary_key=True)
    countryname = models.CharField(max_length=100,null=True)

    class Meta:
        db_table = 'Country'


class CustomerProperty(models.Model):
    customerid = models.IntegerField(null=True)
    propertyid = models.IntegerField(null=True)
    status = models.CharField(max_length=1,null=True)

    class Meta:
        db_table = 'customerproperty'