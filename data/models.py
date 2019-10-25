from django.db import models
from taggit.managers import TaggableManager
from taggit.models import TaggedItemBase


class TaggedLabelDataSet(TaggedItemBase):
    content_object = models.ForeignKey('DataSet', on_delete=models.CASCADE)

class TaggedFileFormatDataSet(TaggedItemBase):
    content_object = models.ForeignKey('DataSet', on_delete=models.CASCADE)


class DataSet(models.Model):
    name = models.TextField()
    website = models.URLField()
    description = models.TextField()
    location = models.CharField(max_length=255)
    labels = TaggableManager(through=TaggedLabelDataSet, related_name='tagged_labels')
    organization = models.TextField('Organization collecting data')
    start_year = models.PositiveIntegerField(null=True, blank=True)
    end_year = models.PositiveIntegerField(null=True, blank=True)
    data_type = models.CharField(max_length=255, blank=True)
    ownership = models.CharField(max_length=255, blank=True)
    study_type = models.CharField(max_length=255, blank=True)
    file_formats = TaggableManager(through=TaggedFileFormatDataSet, related_name='file_formats_tagged')
    
    approved = models.BooleanField(default=False)
    added_at = models.DateTimeField(auto_now_add=True)

    submitter_name = models.CharField(max_length=4000, blank=True)
    submitter_email = models.EmailField(blank=True)
    submitter_organization = models.CharField(max_length=4000, blank=True)
    submitter_subscribed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
