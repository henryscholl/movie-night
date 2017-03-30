const express = require('express'),
	  router = express.Router(),
	  movieService = require('../services/movie-service');

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/movie', (req, res) => {
	res.render('movie');
});

router.post('/search', (req, res) => {
	let searchText = req.sanitize(req.body.query);
	movieService.getMovies(searchText, (results) => {
		res.json(results);
	});
});

router.post('/search/:id', (req, res) => {
	let movieId = req.params.id;
	movieService.getMovieInfo(movieId, (results) => {
		res.json(results);
	});
});

module.exports = router;