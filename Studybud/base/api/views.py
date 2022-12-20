#Django Rest Framework API - https/django-rest-framework.org
#from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from base.models import Room
from .serializers import RoomSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/rooms',
        'GET /api/rooms/:id'
    ]
    return Response(routes) # return Jsonresponse(routes,Safe = False) Safe means that we can use more than Python dictionaries inside of the response being returned. Safe is gonna allow the list to be turned into JSON list

@api_view(['GET'])
def getRooms(request):
    rooms = Room.objects.all()
    serializer = RoomSerializer(rooms, many= True) #Many=True means that we are serializing many objects
    return Response(serializer.data)

@api_view(['GET'])
def getRoom(request, pk):
    rooms = Room.objects.get(id=pk)
    serializer = RoomSerializer(rooms, many= False) #Many=False means that we are serializing one single object
    return Response(serializer.data)