from property.models import PropertyLikes
from property.serilizers.propertylikesserializer import PropertyLikesSerializer
from rest_framework import viewsets
from rest_framework import permissions

class PropertyLikesDetailsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = PropertyLikes.objects.all()
    serializer_class = PropertyLikesSerializer
    permission_classes = [permissions.IsAuthenticated]