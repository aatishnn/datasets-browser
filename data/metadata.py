from rest_framework.metadata import BaseMetadata
from taggit.models import Tag

from .models import DataSet


def label_options():
    return Tag.objects.values_list('name', flat=True)

def location_options():
    return DataSet.objects.exclude(location='').distinct(
        'location').values_list('location', flat=True)

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
                'organization': {
                    'options': organization_options()
                },

            }
        }
