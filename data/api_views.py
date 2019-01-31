from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action

from .models import DataSet
from .serializers import DataSetSerializer
from .filters import DataSetFilter
from .metadata import FilterMetadata

class DataSetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer
    filterset_class = DataSetFilter
    metadata_class = FilterMetadata

    @action(methods=['GET'], detail=False)
    def schema(self, request):
        meta = self.metadata_class()
        data = meta.determine_metadata(request, self)
        return Response(data)
