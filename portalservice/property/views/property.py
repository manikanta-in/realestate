from property.documents import PropertyDocument
from rest_framework import viewsets
from rest_framework import permissions
from property.documents import PropertyDocument
from property.models import Property
from property.serilizers.propertyserializer import PropertySerializer

import logging
logger = logging.getLogger(__name__)

class PropertyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated]


class PropertyDetailsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated]
    

class PropertySearchViewSet(viewsets.ModelViewSet):
    #document = PropertyDocument
    serializer_class = PropertySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        location = self.request.query_params.get('location')
        if location is not None:
            query = {'location': location}
            logger.info(msg='location' + location, extra=query)
            return Property.objects.filter(location_name__exact=location)
        return Property.objects.all()

    # def get_queryset(self):
    #     location = self.request.query_params.get('location')
    #     if location is not None:
    #         query = {'location': location}
    #         logger.info(msg='location' + location, extra=query)
    #         return PropertyDocument.search().query('term', **query)
    #     return Property.objects.all()