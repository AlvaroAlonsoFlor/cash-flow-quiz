# Cash Flow Quiz full-stack app

A quiz game built with Ruby and Ruby on Rails for the back-end and JavaScript with React and Redux for the front-end.

![Cash Flow Quiz](/readme_images/app_sample.png)

## How to run it

### SERVER

Go to the server folder and run on the terminal:

```bundle install ```

 #### Seed the database:

```rake db:migrate```

```rake db:seed ```

You might have some problems to migrate the db. If you have any problems try to run:

```bin/rails db:environment:set RAILS_ENV=development ```

#### Run the server:

```rails s -p 3001 ```

Once you have the server running you can access the api using the following urls:

**All questions** :
http://localhost:3001/api/v1/questions

**Single question with options embedded** :
http://localhost:3001/api/v1/questions/1

**Options** :
http://localhost:3001/api/v1/options


### CLIENT

Open another terminal window and, go to the client folder and run:

```npm i ```

```npm start ```

Now you should be able to access the app at http://localhost:3000/quiz

## Tests status

#### Front-end (Jest and Enzyme)

[![Build Status](https://travis-ci.org/VladmirVolgen/cash-flow-quiz.svg?branch=master)](https://travis-ci.org/VladmirVolgen/cash-flow-quiz)


