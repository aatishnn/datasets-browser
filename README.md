# Requirements

- Python 3
- NodeJs v11 and yarn (see [nvm](https://github.com/creationix/nvm))
- PostgreSQL (Distinct on particular column is required. So, SQLite is not supported)

# Local Development Setup

```
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
cd frontend/
yarn install
cd ..
```

#### Configure settings
Copy `.env.sample` to `.env` and set PostgreSQL connection settings. Make sure the
database mentioned in the connection url (default is datasets) exists.

#### Migrate

```
./manage.py migrate
```

#### Source existing datasets

```
./manage.py import_csv datadir/md4sg.csv
```

## Running

Run the following on two separate terminals:

#### Run Django API (ensure virtualenv is activated)

```
./manage.py runserver
```

#### Run React frontend

```
cd frontend/
yarn start
```

# Deployment to Heroku
To deploy to Heroku at a new app, run the following:

- Create a Heroku app (skip if you already have one for this)
```
heroku apps:create -a <app_name>
heroku buildpacks:set heroku/python
heroku buildpacks:add --index 1 heroku/nodejs
heroku addons:create heroku-postgresql:hobby-dev
```

- Add Git remote to current repo
```
 heroku git:remote -a <ap-name>
```

- Deploy (this is the command for subsequent deploys)
```
git push heroku master
```

This deployment will build the React app and serve it on `/`. To open the app, you can do:
```
heroku open
```


















