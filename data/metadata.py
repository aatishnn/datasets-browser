from rest_framework.metadata import BaseMetadata
from taggit.models import Tag

from .models import DataSet


def label_options():
    return Tag.objects.values_list('name', flat=True)

def location_options():
    return DataSet.objects.exclude(location='').distinct(
        'location').values_list('location', flat=True)

def data_type_options():
    return DataSet.objects.exclude(data_type='').distinct(
        'data_type').values_list('data_type', flat=True)

def file_format_options():
    return DataSet.objects.exclude(file_format='').distinct(
        'file_format').values_list('file_format', flat=True)

def ownership_options():
    return DataSet.objects.exclude(ownership='').distinct(
        'ownership').values_list('ownership', flat=True)

def study_type_options():
    return DataSet.objects.exclude(study_type='').distinct(
        'study_type').values_list('study_type', flat=True)

def organization_options():
    return DataSet.objects.exclude(organization='').distinct(
        'organization').values_list('organization', flat=True)


class FilterMetadata(BaseMetadata):
    def determine_metadata(self, request, view):
        return {
            'name': view.get_view_name(),
            'filters': {
                'label':{
                    'options': label_options()
                },
                'location': {
                    'options': location_options()
                },
                'data_type': {
                    'options': data_type_options()
                },
                'file_format': {
                    'options': file_format_options()
                },
                'study_type': {
                    'options': study_type_options()
                },
                'ownership': {
                    'options': ownership_options()
                },
                'organization': {
                    'options': organization_options()
                },

            }
        }
