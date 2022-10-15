import json
import os
from django.http import JsonResponse
from django.urls import include, path
from rest_framework_swagger.views import get_swagger_view
from rest_framework.views import APIView

class JSONFileView(APIView):
    def get(self, request, filename):
        print("filename::::")
        print(filename)
        root_path = "./mock" 
        file_path = os.path.join(root_path, filename+'.json')
        with open(file_path, 'r') as jsonfile:
            json_data = json.loads(jsonfile.read())
            print(json_data)
        return JsonResponse(json_data)