"""propertytester URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.schemas import get_schema_view
from rest_framework.renderers import JSONOpenAPIRenderer
from django.views.generic import TemplateView
from django.urls import path
from django.http import HttpResponse
from rest_framework_simplejwt import views as jwt_views
import json

from propertytester.views import JSONFileView

schema_view = get_schema_view(
    title='Server Monitoring API',
    url='https://www.example.org/api/',
    renderer_classes=[JSONOpenAPIRenderer]
)

def loadjsonView(json_file = None):
    # open, generate, fetch the json file
    # for e.g.:
    f = open(json_file)
    json_content = json.load(f)
    return HttpResponse(
        json_content,
        content_type='application/json',
        status=200
    )

urlpatterns = [

    path('openapi/', get_schema_view(
        title="Property Service",
        description="API developers hpoing to use our service"
    ), name='openapi-schema'),
    path('admin/', admin.site.urls),
    path('api/property/', include('property.urls')),
    path('docs/', TemplateView.as_view(
         template_name='documentation.html',
         extra_context={'schema_url': 'openapi-schema'}
         ), name='swagger-ui'),
     path('', TemplateView.as_view(
         template_name='index.html',
         ), name='RightMyProperty'),     
     path('api/property/token/',
         jwt_views.TokenObtainPairView.as_view(),
         name ='token_obtain_pair'),
    path('api/property/token/refresh/',
         jwt_views.TokenRefreshView.as_view(),
         name ='token_refresh'), 
     path('api/<filename>', JSONFileView.as_view(), name='mostViewedProperties'),        
    # path("opensearch/", include("opensearch.urls")),
]
