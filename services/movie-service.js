const request = require('request');

let movieService = {};

movieService.getMovies = function (searchText, callback) {
	let options = {
        url: 'http://www.omdbapi.com?s=' + searchText,
        method: 'GET',
        json: true
      };

  request(options, (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      let results = [];
      results = body.Search;
      callback(results);
    }
  });
}

movieService.getMovieInfo = function (movieId, callback) {
	let options = {
        url: 'http://www.omdbapi.com?i=' + movieId,
        method: 'GET',
        json: true
      };

  request(options, (error, response, body) => {
    if(error) {
      console.log(error);
    } else {
      callback(body);
    }
  });
}

module.exports = movieService;