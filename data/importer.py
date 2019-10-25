import csv
from datetime import date
from .models import DataSet


def normalize_capitalize_remove_na(value):
    normalized = value.strip().lower().capitalize().replace('/', '')

    if normalized != "Na":
        return normalized
    return ""

def split_years_column(years):
    '''
    Returns (start_year, end_year) from string such as "2012-2019"
        Replaces "current" with current year
        NA value is treated as empty
    '''
    start_year, end_year = None, None
    splitted = years.split('-')

    try:
        start_year = int(splitted[0])
    except ValueError:
        pass
    
    try:
        end_year = int(splitted[1])
    except IndexError:
        pass
    except ValueError:
        if splitted[1].lower().strip() == 'current':
            end_year = date.today().year

    return start_year, end_year

def save_csv_row_to_dataset(row):
    dataset = DataSet()
    for prop in ['website', 'name', 'description', 'location', 'organization', 'ownership']:
        setattr(dataset, prop, row[prop].strip())
    dataset.start_year, dataset.end_year = split_years_column(row['years'])
    dataset.ownership = normalize_capitalize_remove_na(row['ownership'])
    dataset.data_type = normalize_capitalize_remove_na(row['data_type'])
    dataset.study_type = normalize_capitalize_remove_na(row['study_type'])
    dataset.approved = True
    dataset.save()


    dataset.labels.clear()
    labels = [label.strip() for label in row['labels'].split(',') if label.strip()]
    
    for label in labels:
        dataset.labels.add(label)

    dataset.file_formats.clear()
    file_formats = [normalize_capitalize_remove_na(file_format.strip()) for file_format in row['file_format'].split(',') if file_format.strip()]
    
    for file_format in file_formats:
        dataset.file_formats.add(file_format)
        
    return dataset

def import_csv(filename):
    print('Warning!, dropping existing datasets')
    DataSet.objects.all().delete()
    with open(filename) as f:
        reader = csv.DictReader(f)
        for row in reader:
            save_csv_row_to_dataset(row)
