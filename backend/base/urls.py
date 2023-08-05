from django.urls import  path
from .views import *

urlpatterns = [
    path('user/login/',MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('user/register/', registerUser, name="register-user"),
    path('user/profile/', getUserProfile, name="profile-user"),
    path('chicken/alls', getAllChickens, name="add-chicken"),

    path('chicken/add', AddChicken, name="add-chicken"),
    path('chicken/update/<str:pk>/', UpdateChicken, name="update-chicken"),
    path('chicken/<str:pk>/', getChickenById, name="update-chicken"),
    path('chicken/delete/<str:pk>/', DeleteChicken, name="delete-chicken"),
]
