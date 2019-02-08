# Requirements

- Python 3
- NodeJs v11 and yarn (see nvm)
- PostgreSQL (Distinct on particular column is required. So, SQLite is not supported)

# Local Development Setup
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
cd frontend/
yarn install
cd ..

## Configure settings
Copy `.env.sample` to `.env` and set PostgreSQL connection settings. Make sure the
database mentioned in the connection url (default is datasets) exists.

## Migrate
./manage.py migrate

## Source existing datasets
./manage.py import_csv datadir/md4sg.csv

## Running

Run the following on two separate terminals:

## Run Django API (ensure virtualenv is activated)
./manage.py runserver

## Run React frontend
cd frontend/
yarn start

