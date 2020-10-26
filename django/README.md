## Setting up and running the backend

### Prerequisites

- Python 3
- Pip 3
- Virtualenv

### Go to the backend

```
cd ./django/
```

### Create & activate virtual environment

```
python3 -m venv /venv/
source ./venv/bin/activate
```

For more information on virtualenv, visit the [offical site](https://docs.python.org/3/library/venv.html).

### Install project dependencies

Verify that your virtual environment is activated.
The command line should have "(venv)" at the far left.

```
pip install -r requirements.txt

```

### Add auth0 domain and API Identifier to config.py

#### From the tutorial [Building Modern Applications with Django and Vue.js](https://auth0.com/blog/building-modern-applications-with-django-and-vuejs/)

**Creating an Auth0 API**

Before you can use secure your app with Auth0, you first need to create an Auth0 account. If you haven't so yet, [sign up for a free account now](https://auth0.com/signup).

As part of the sign up process, you'll be asked to create a Auth0 domain. For example, django-vue-js.auth0.com. If you'd like to read more about this, you can checkout our [learn the basics documentation](https://auth0.com/docs/getting-started/the-basics), that has some great info on Auth0 domains and how to use them.

After that, head over to the [API section](https://manage.auth0.com/?_ga=2.141931826.1434105063.1603098731-2028026626.1602941864#/apis) of the Auth0 dashboard and click on the CREATE API button.

You'll be presented with a form to fill in your API details: the name, the identifier, and the signing algorithm.

Auth0 Create API Form

You can use the following properties while filling this form:

- Name: Django Vue.js API
- Identifier: https://django-vuejs-api
- Signing Algorithm: RS256

After that, click on the Create button. You'll be taken to a page where you can further customize your API settings.

That's it! You are now ready to integrate your Django application with Auth0

#### Entering new info in config.py

Go into the config.py file and modify:

```
AUTH0_DOMAIN = '<YOUR_AUTH0_DOMAIN>'
API_IDENTIFIER = '<YOUR_API_IDENTIFIER>'
```

### Prepare Django database

```
python manage.py makemigrations
python manage.py migrate
python manage.py loaddata fixtures/initial_data.json
```

### Launch server

```
python manage.py runserver
```

The backend is thus exposed at localhost:8000
