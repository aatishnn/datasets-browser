from rest_framework.metadata import BaseMetadata
from taggit.models import Tag

from .models import DataSet


def get_datasets(request):
    queryset = DataSet.objects.all()
    if request.user.is_authenticated:
        return queryset
    return queryset.filter(approved=True)


def get_field_options(request, field):
    excluded = {}
    excluded[field] = ''

    return get_datasets(request).exclude(**excluded).distinct(
        field).values_list(field, flat=True)

def get_label_options(request):
    queryset = get_datasets(request)
    return queryset.exclude(labels__isnull=True).distinct(
        'labels').values_list('labels__name', flat=True)


class FilterMetadata(BaseMetadata):
    def determine_metadata(self, request, view):
        return {
            'name': view.get_view_name(),
            'filters': {
                'label':{
                    'options': get_label_options(request)
                },
                'location': {
                    'options': get_field_options(request, 'location')
                },
                'data_type': {
                    'options': get_field_options(request, 'data_type')
                },
                'file_format': {
                    'options': get_field_options(request, 'file_format')
                },
                'study_type': {
                    'options': get_field_options(request, 'study_type')
                },
                'ownership': {
                    'options': get_field_options(request, 'ownership')
                },
                'organization': {
                    'options': get_field_options(request, 'organization')
                },

            }
        }
