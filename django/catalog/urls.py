from django.urls import path
# from rest_framework import routers

from . import views

# router = routers.DefaultRouter()
# router.register('address', FoodViewSet)

urlpatterns = [
    path('address/', views.address_list),
    path('address/<int:pk>', views.address_detail),
]
