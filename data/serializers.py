from rest_framework import serializers
from taggit_serializer.serializers import (
    TagListSerializerField, TaggitSerializer
)
from .models import DataSet


class DataSetSerializer(TaggitSerializer, serializers.ModelSerializer):
    labels = TagListSerializerField()
    file_formats = TagListSerializerField()

    class Meta:
        model = DataSet
        fields = '__all__'


class DataSetRequestSerializer(TaggitSerializer, serializers.ModelSerializer):
    labels = TagListSerializerField()

    class Meta:
        model = DataSet
        fields = (
            'id',
            'name',
            'website',
            'description',
            'location',
            'labels',
            'organization',
            'start_year',
            'end_year',
            'data_type',
            'ownership',
            'study_type',
            'file_format',
            'submitter_name',
            'submitter_email',
            'submitter_organization',
            'submitter_subscribed'
        )
