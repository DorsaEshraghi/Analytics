# Local Setup

Python 3 and [Pipenv](https://docs.pipenv.org/) need to already be installed.

Clone the repo to your computer. For example, to place it on your `Desktop`.

```
$ cd ~/Desktop
$ cd Analytics
```

## Backend

Install the `Pipenv` packages and start a new shell. Then `cd` into the `backend` directory and run the local server.

```
$ cd backend
$ pipenv install
$ pipenv shell
(backend) $ ./manage.py runserver
```

You can see the API now at [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api).

## Frontend

Navigate to the `frontend` directory.

```
$ cd ~/Desktop
$ cd Analytics
$ cd frontend
```

Make sure React is already installed globally. If not `$ npm install -g create-react-app`.

Then install necessary packages and start the React server:

```
$ npm install
$ npm start
```

Navigate to [http://localhost:3000/](http://localhost:3000/) 
# Analytics
