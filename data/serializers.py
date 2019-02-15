from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)
from .models import DataSet


class DataSetSerializer(TaggitSerializer, serializers.ModelSerializer):
    labels = TagListSerializerField()

    class Meta:
        model = DataSet
        fields = '__all__'
