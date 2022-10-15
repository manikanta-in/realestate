from rest_framework import serializers
from property.models import PropertyLikes


class PropertyLikesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = PropertyLikes
        fields = ['propertyid', 'propertysubtypeid', 'likeddate', 'customerid']