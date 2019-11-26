# Generated by Django 2.1.5 on 2019-10-25 22:33

from django.db import migrations, models
import django.db.models.deletion
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0002_auto_20150616_2121'),
        ('data', '0005_auto_20190219_1309'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaggedFileFormatDataSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TaggedLabelDataSet',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.RemoveField(
            model_name='dataset',
            name='file_format',
        ),
        migrations.AlterField(
            model_name='dataset',
            name='labels',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', related_name='tagged_labels', through='data.TaggedLabelDataSet', to='taggit.Tag', verbose_name='Tags'),
        ),
        migrations.AddField(
            model_name='taggedlabeldataset',
            name='content_object',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.DataSet'),
        ),
        migrations.AddField(
            model_name='taggedlabeldataset',
            name='tag',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='data_taggedlabeldataset_items', to='taggit.Tag'),
        ),
        migrations.AddField(
            model_name='taggedfileformatdataset',
            name='content_object',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='data.DataSet'),
        ),
        migrations.AddField(
            model_name='taggedfileformatdataset',
            name='tag',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='data_taggedfileformatdataset_items', to='taggit.Tag'),
        ),
        migrations.AddField(
            model_name='dataset',
            name='file_formats',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', related_name='file_formats_tagged', through='data.TaggedFileFormatDataSet', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]