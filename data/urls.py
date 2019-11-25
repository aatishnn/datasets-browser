from django.urls import path, include
from .api_views import DataSetViewSet, DataSetRequest

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'datasets', DataSetViewSet, basename='dataset')


urlpatterns = [
    path('request-dataset/', DataSetRequest.as_view()),
    path('', include(router.urls))
]
