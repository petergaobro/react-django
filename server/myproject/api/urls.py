from django.urls import path
from .views import get_flowers, create_flower
# , flower_detail
urlpatterns = [
    path('flowers/', get_flowers, name='get_flowers'),
    path('flowers/create/', create_flower, name='create_flower'),
    # path('flowers/<int:pk>', flower_detail, name='flower_detail')
]