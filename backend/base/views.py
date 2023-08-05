from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.core.paginator import Paginator,PageNotAnInteger,EmptyPage
from .serializer import *
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .models import *
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k, v in serializer.items():
            data[k] = v

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    

#register user
@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'details': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


#get useprofile
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


#chicken views
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getAllChickens(request):
    chickens = Chicken.objects.all()
    serializer = ChickenSerializer(chickens, many=True)
    return Response (serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getChickenById(request,pk):
    chicken = Chicken.objects.get(_id=pk)
    serializer = ChickenSerializer(chicken, many=False)
    return Response (serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddChicken(request):
    data = request.data
    chicken = Chicken.objects.create(
        name= data['name'],
        breed = data['breed'],
        age = data['age'],
        sex = data['sex']
    )

    serializer =  ChickenSerializer(chicken, many=False)
    return Response(serializer.data)

@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def UpdateChicken(request,pk):
    data = request.data
    chicken = Chicken.objects.get(_id=pk)
    chicken.name = data['name']
    chicken.breed = data['breed']
    chicken.age = data['age']
    chicken.sex = data['sex']
    chicken.save()
    

    serializer =  ChickenSerializer(chicken, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteChicken(request,pk):
    chicken = Chicken.objects.get(_id=pk)
    chicken.delete()
    return Response('deleted succesfully')




 
