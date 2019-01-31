import csv
from .models import DataSet

def save_csv_row_to_dataset(row):
    dataset = DataSet()
    for prop in ['website', 'name', 'description', 'location', 'organization']:
        setattr(dataset, prop, row[prop].strip())
    dataset.save()
    labels = [label.strip() for label in row['labels'].split(',') if label.strip()]
    dataset.labels.clear()
    for label in labels:
        dataset.labels.add(label)
    return dataset

def import_csv(filename):
    print('Warning!, dropping existing datasets')
    DataSet.objects.all().delete()
    with open(filename) as f:
        reader = csv.DictReader(f)
        for row in reader:
            save_csv_row_to_dataset(row)
