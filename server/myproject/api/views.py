from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Flower
from .serializer import FlowerSerializer


@api_view(['GET'])
def get_flowers(request):
    flowers = Flower.objects.all()
    serializedData = FlowerSerializer(flowers, many=True).data
    return Response(serializedData)


@api_view(['POST'])
def create_flower(request):
    data = request.data
    serializer = FlowerSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
