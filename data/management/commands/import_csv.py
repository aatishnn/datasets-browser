from django.core.management.base import BaseCommand, CommandError

from data.importer import import_csv


class Command(BaseCommand):
    help = '''
    Import MD4SG CSV file
    ./manage.py import_csv datadir/md4sg.csv
    '''

    def add_arguments(self, parser):
        parser.add_argument('filename', type=str)

    def handle(self, *args, **options):
        import_csv( options['filename'])
