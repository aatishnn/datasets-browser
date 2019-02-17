from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.generics import CreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny


from .models import DataSet
from .serializers import DataSetSerializer, DataSetRequestSerializer
from .filters import DataSetFilter
from .metadata import FilterMetadata
from .email import notify_new_dataset_suggestion


class DataSetViewSet(viewsets.ModelViewSet):
    queryset = DataSet.objects.all()
    serializer_class = DataSetSerializer
    filterset_class = DataSetFilter
    metadata_class = FilterMetadata
    permission_classes =  (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return DataSet.objects.all()
        else:
            return DataSet.objects.filter(approved=True)

    @action(methods=['GET'], detail=False)
    def schema(self, request):
        meta = self.metadata_class()
        data = meta.determine_metadata(request, self)
        return Response(data)



class DataSetRequest(CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = DataSet.objects.all()
    serializer_class = DataSetRequestSerializer


    def perform_create(self, serializer):
        serializer.save()
        notify_new_dataset_suggestion(serializer.data['id'])

