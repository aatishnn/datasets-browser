from rest_framework.metadata import BaseMetadata
from taggit.models import Tag

from .models import DataSet


def get_field_options(request, field):
    queryset = DataSet.objects.all()
    excluded = {}
    excluded[field] = ''

    return queryset.exclude(**excluded).distinct(
        field).values_list(field, flat=True)


def label_options():
    return Tag.objects.values_list('name', flat=True)



class FilterMetadata(BaseMetadata):
    def determine_metadata(self, request, view):
        return {
            'name': view.get_view_name(),
            'filters': {
                'label':{
                    'options': label_options()
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
