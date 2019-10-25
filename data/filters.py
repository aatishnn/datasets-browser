import django_filters
from django.db.models import Q
from taggit.models import Tag

from .models import DataSet


class DataSetFilter(django_filters.FilterSet):
    q = django_filters.CharFilter('q', method='filter_q', label='q')
    label = django_filters.ModelMultipleChoiceFilter(
        field_name='labels__name',
        to_field_name='name',
        conjoined=False,
        distinct=True,
        queryset=Tag.objects.all(),
    )

    file_format = django_filters.ModelMultipleChoiceFilter(
        field_name='file_formats__name',
        to_field_name='name',
        conjoined=False,
        distinct=True,
        queryset=Tag.objects.all(),
    )

    def filter_q(self, qs, name, value):
        return qs.filter(
            Q(name__icontains=value) | Q(description__icontains=value)
        )

    class Meta:
        model = DataSet
        fields = [
            'name', 'description', 'organization', 'location', 'data_type',
            'study_type', 'ownership'
        ]
        
