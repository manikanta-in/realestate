# Generated by Django 4.0.4 on 2022-05-14 20:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminOrganization',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('add1', models.CharField(max_length=100, null=True)),
                ('add2', models.CharField(max_length=100, null=True)),
                ('city', models.CharField(max_length=100, null=True)),
                ('state', models.CharField(max_length=100, null=True)),
                ('country', models.CharField(max_length=100, null=True)),
                ('landline', models.CharField(max_length=100, null=True)),
                ('mobile', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(max_length=100, null=True)),
                ('gst', models.CharField(max_length=100, null=True)),
                ('facebook', models.CharField(max_length=100, null=True)),
                ('youtube', models.CharField(max_length=100, null=True)),
                ('linkedin', models.CharField(max_length=100, null=True)),
                ('twitter', models.CharField(max_length=100, null=True)),
                ('whatsappno', models.CharField(max_length=100, null=True)),
                ('instagram', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'adminorganization',
            },
        ),
        migrations.CreateModel(
            name='AdminRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=1)),
            ],
            options={
                'db_table': 'adminrole',
            },
        ),
        migrations.CreateModel(
            name='AdminsComEtaKeys',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('page', models.CharField(max_length=100)),
                ('keywords', models.CharField(max_length=5000, null=True)),
            ],
            options={
                'db_table': 'adminscometakeys',
            },
        ),
        migrations.CreateModel(
            name='AdminService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=1)),
            ],
            options={
                'db_table': 'adminservice',
            },
        ),
        migrations.CreateModel(
            name='AdminServiceGeoCoverage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('serviceid', models.IntegerField()),
                ('statecd', models.CharField(max_length=2)),
                ('districtid', models.IntegerField()),
            ],
            options={
                'db_table': 'adminservicegeocoverage',
            },
        ),
        migrations.CreateModel(
            name='AdminTestmonial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('photoid', models.IntegerField(null=True)),
                ('statement', models.CharField(max_length=512, null=True)),
                ('comment', models.CharField(max_length=1024, null=True)),
            ],
            options={
                'db_table': 'admintestmonial',
            },
        ),
        migrations.CreateModel(
            name='AdminUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=1)),
            ],
            options={
                'db_table': 'adminuser',
            },
        ),
        migrations.CreateModel(
            name='AdminUserRole',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField()),
                ('roleid', models.IntegerField()),
                ('status', models.CharField(max_length=1)),
            ],
            options={
                'db_table': 'adminuserrole',
            },
        ),
        migrations.CreateModel(
            name='Country',
            fields=[
                ('countrycd', models.CharField(max_length=3, primary_key=True, serialize=False)),
                ('countryname', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'Country',
            },
        ),
        migrations.CreateModel(
            name='CustomerProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_user_name', models.CharField(max_length=300)),
                ('contact_name', models.CharField(max_length=300, null=True)),
                ('mobile', models.CharField(max_length=15, null=True)),
                ('email_addr', models.CharField(max_length=150, null=True)),
                ('mobilevalidate', models.CharField(max_length=1, null=True)),
                ('emailvalidate', models.CharField(max_length=1, null=True)),
                ('location', models.CharField(max_length=100, null=True)),
                ('status', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'customerprofile',
            },
        ),
        migrations.CreateModel(
            name='CustomerProperty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customerid', models.IntegerField(null=True)),
                ('propertyid', models.IntegerField(null=True)),
                ('status', models.CharField(max_length=1, null=True)),
            ],
            options={
                'db_table': 'customerproperty',
            },
        ),
        migrations.CreateModel(
            name='District',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('districtname', models.CharField(max_length=100, null=True)),
                ('statecd', models.CharField(max_length=2, null=True)),
            ],
            options={
                'db_table': 'district',
            },
        ),
        migrations.CreateModel(
            name='Icon',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=500, null=True)),
            ],
            options={
                'db_table': 'icon',
            },
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'location',
            },
        ),
        migrations.CreateModel(
            name='LocationHighlight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100, null=True)),
                ('iconid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'locationhighlight',
            },
        ),
        migrations.CreateModel(
            name='LocationPropertyHighlight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyid', models.IntegerField(null=True)),
                ('locationhighlightid', models.IntegerField(null=True)),
                ('mediaid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'locationpropertyhighlight',
            },
        ),
        migrations.CreateModel(
            name='LookupMaster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('master_id', models.IntegerField()),
                ('name', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'lookupmaster',
            },
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=1, null=True)),
                ('url', models.CharField(max_length=500, null=True)),
                ('sizemb', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'media',
            },
        ),
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_title', models.CharField(max_length=512, null=True)),
                ('property_detail', models.CharField(max_length=4000, null=True)),
                ('location_name', models.CharField(max_length=200, null=True)),
                ('latitute', models.CharField(max_length=50, null=True)),
                ('longtitue', models.CharField(max_length=50, null=True)),
                ('venture_name', models.CharField(max_length=500, null=True)),
                ('owner_name', models.CharField(max_length=200, null=True)),
                ('contact_num1', models.CharField(max_length=50, null=True)),
                ('contact_num2', models.CharField(max_length=50, null=True)),
                ('best_time_to_contact', models.CharField(max_length=50, null=True)),
                ('extent_in_acre', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('extent_in_gunta', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('extent_in_sqryrds', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('plinth_area', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('plot_area', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('city_town', models.CharField(max_length=200, null=True)),
                ('village_name', models.CharField(max_length=200, null=True)),
                ('mandal_name', models.CharField(max_length=200, null=True)),
                ('approachroad_id', models.IntegerField(null=True)),
                ('road_size_feet', models.IntegerField(null=True)),
                ('prop_facing_id', models.IntegerField(null=True)),
                ('age_of_property', models.IntegerField(null=True)),
                ('floor_num', models.IntegerField(null=True)),
                ('no_of_floors', models.IntegerField(null=True)),
                ('parking_places', models.CharField(max_length=5, null=True)),
                ('four_weeler_parking', models.IntegerField(null=True)),
                ('two_weeler_parking', models.IntegerField(null=True)),
                ('no_of_bedroom', models.IntegerField(null=True)),
                ('no_of_bathroom', models.IntegerField(null=True)),
                ('offer_price', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('market_price', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('rental_value', models.DecimalField(decimal_places=2, max_digits=7, null=True)),
                ('prop_sub_type_id', models.IntegerField(null=True)),
                ('district_id', models.IntegerField(null=True)),
                ('status_id', models.IntegerField(null=True)),
                ('distance_from_orr', models.IntegerField(null=True)),
                ('distance_from_hyd', models.IntegerField(null=True)),
                ('create_date', models.DateTimeField(null=True)),
                ('update_userid', models.CharField(max_length=30, null=True)),
                ('update_date', models.DateTimeField(null=True)),
            ],
            options={
                'db_table': 'property',
            },
        ),
        migrations.CreateModel(
            name='PropertyKnownFor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100, null=True)),
                ('propertytypeid', models.IntegerField(null=True)),
                ('propertysubtypeid', models.IntegerField(null=True)),
                ('iconid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'propertyknownfor',
            },
        ),
        migrations.CreateModel(
            name='PropertyLikes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyid', models.IntegerField(null=True)),
                ('propertysubtypeid', models.IntegerField(null=True)),
                ('likeddate', models.DateTimeField(null=True)),
                ('customerid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'propertylikes',
            },
        ),
        migrations.CreateModel(
            name='PropertyMedia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('property_id', models.IntegerField(null=True)),
                ('mediaid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'propertymedia',
            },
        ),
        migrations.CreateModel(
            name='PropertyStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'propertystatus',
            },
        ),
        migrations.CreateModel(
            name='PropertySubType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proptypeid', models.IntegerField(null=True)),
                ('description', models.CharField(max_length=100, null=True)),
                ('status', models.CharField(max_length=1, null=True)),
            ],
            options={
                'db_table': 'propertysubtype',
            },
        ),
        migrations.CreateModel(
            name='PropertyTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyid', models.IntegerField(null=True)),
                ('propertysubtypeid', models.IntegerField(null=True)),
                ('title', models.CharField(max_length=512, null=True)),
            ],
            options={
                'db_table': 'propertytitle',
            },
        ),
        migrations.CreateModel(
            name='PropertyType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=100, null=True)),
            ],
            options={
                'db_table': 'propertytype',
            },
        ),
        migrations.CreateModel(
            name='PropertyViews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('propertyid', models.IntegerField(null=True)),
                ('propertysubtypeid', models.IntegerField(null=True)),
                ('vieweddate', models.DateTimeField(null=True)),
                ('customerid', models.IntegerField(null=True)),
            ],
            options={
                'db_table': 'propertyviews',
            },
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('statecd', models.CharField(max_length=2, primary_key=True, serialize=False)),
                ('statename', models.CharField(max_length=100, null=True)),
                ('countrycd', models.CharField(max_length=2)),
            ],
            options={
                'db_table': 'state',
            },
        ),
    ]
