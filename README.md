# Project Title

Simple app built with Javascript, jQuery and Node.js that uses the [OMDb API](http://omdbapi.com/) to fetch and display movie info.

### Installation

Clone or download the repository, then install dependencies with npm:

```
$ npm install
```

### Usage

Start the server:

```
$ npm start
```

View running app at http://localhost:3000/

### How it works

API calls are located in services/movie-service.js. Client-side JS triggers post requests to routes in routes/index.js that fetch the requested data and returns as JSON which is rendered in the views.