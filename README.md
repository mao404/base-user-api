# Base Rest API for new projects

The base api has:

- Express server
- Error handlers
- Routes
- Swagger documentation

## Dependencies installed:

### [Dotenv](https://www.npmjs.com/package/dotenv)

Used to create environment variables, there is an env.example file that has to be filled with credentials that is imported in the config/index file to add new ones. 

### [Express](https://www.npmjs.com/package/express)

Used to set up the server and routes

### [Morgan](https://www.npmjs.com/package/morgan)

To get in console or log all the HTTP requests made from users, by default is **'silly'**

### [Swagger UI express](https://www.npmjs.com/package/swagger-ui-express)


To documentate the code and how it works, type of data required for each object or JSON, test the HTTP methods in a graphical way, by default it uses the ***'/documentation'*** route and can be changed in the config file.

### [Winston](https://www.npmjs.com/package/winston)

To make a console log in case the NODE_ENV is **'development'** or make a log file if it is **'production'**

## Dev dependencies

### [Nodemon](https://www.npmjs.com/package/nodemon)

Used to start the server everytime a file saves.

## Project Setup

```
npm install
```

## Compile and Hot-Reload for Development

```
npm run dev
```