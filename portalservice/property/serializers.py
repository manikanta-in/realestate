from rest_framework import serializers
from property.models import Property


class PropertySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Property
        fields = ['owner_name', 'location_name', 'latitute', 'longtitue',
                  'extent_in', 'road_size', 'village_locality', 'mandal',
                  'offer_price', 'market_price', 'distance_from_orr',
                  'contact_num1', 'approch_road']

