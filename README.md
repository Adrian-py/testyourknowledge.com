# testyourknowledge.com

This website is a quiz website that uses the [https://opentdb.com/](https://opentdb.com/) API to give 10 true or false questions.

## How to Start

### Frontend (React)

To run this application on your desktop device, first clone the repository locally.

After cloning it, to start the frontend side of the application type the following to the console:

```bash
cd client
npm start
```

To play with the styling of the app using SASS, a script is available for auto compiling SASS to CSS:

```bash
npm run sass
```

### Backend (Nodejs)

To start the backend server, type the following to the console:

```bash
cd server
npm run dev
```

and to connect to the database, create a .env file containing an environment variable for the MongoDB URI.

## Technologies Used

Some of the technologies used for the frontend are the following:

1. React
2. Framer-motion
3. axios
4. he (HTML entities decoder/encoder)
5. React Router
6. jwt-decode (Decoding JWT from the server)

For the backend, the technologies used are:

1. CORS
2. dotenv
3. Express
4. jsonwebtoken
5. Mongoose

## Features

1. Login/Register and logout functionality
2. Play true or false quiz game
3. Resume previously unfinished game
