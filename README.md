# Family Circle (Prime solo project)

Having family members that lived all over the world can be hard to meet and learn about each other. This application allow user to create members and share the application with their childrens. Allowing their children to learn more about each individual members and the member's media family. 

# Technologies used to create this App.

1. React
2. Redux
3. Passport
4. node.js
5. Saga
6. moment.js
7. Postgre SQL
8. CSS
9. Material UI
(a list of dependencies can be found in package.json file)

# Create database and tables

* Create a database called `my_solo_app`. Copy and paste the SQL from the database.sql into a new SQL query. Insert the informations in order from top to bottom.

## Getting started

1. Download this project.
2. npm install
3. Create a `.env` file at the root project and paste this line into the file:

SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

4. Start postgres if not running already by using `brew services start postgresql`    
5. npm run server
6. npm run client
7. Register for an account and login "username" and "password" of your choice.


## These are features I did not get to and will like to implement in the future.
There is many features that I did not get to within the two weeks. I would like to add the following features,

1. uploading images
2. updating members brief description and images.
3. Allow new user to register their family.
4. Adding new family instead of just a member.


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

