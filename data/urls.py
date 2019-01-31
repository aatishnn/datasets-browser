from django.urls import path
from .api_views import DataSetViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'datasets', DataSetViewSet, basename='dataset')
urlpatterns = router.urls
