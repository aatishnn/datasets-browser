# Generated by Django 2.1.5 on 2019-02-19 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_auto_20190217_1446'),
    ]

    operations = [
        migrations.AddField(
            model_name='dataset',
            name='submitter_email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AddField(
            model_name='dataset',
            name='submitter_name',
            field=models.CharField(blank=True, max_length=4000),
        ),
        migrations.AddField(
            model_name='dataset',
            name='submitter_organization',
            field=models.CharField(blank=True, max_length=4000),
        ),
        migrations.AddField(
            model_name='dataset',
            name='submitter_subscribed',
            field=models.BooleanField(default=False),
        ),
    ]