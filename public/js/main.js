$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		e.preventDefault();
		let searchText = $('#searchText').val();
		$.post('/search', {query: searchText}, (results) => {
			listMovies(results);
		});
	});
});

function listMovies(movies) {
	let output = '';
	$.each(movies, (index, movie) => {
		output += `
			<div class="col-md-3">
				<div class="well text-center">
					<img src="${movie.Poster}">
					<h5>${movie.Title}</h5>
					<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">
						Movie Details
					</a>
				</div>
			</div>
		`;
	});

	$('#movies').html(output);
}

function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = '/movie';
	return false;
}

function getMovie() {
	let movieId = sessionStorage.getItem('movieId');
	$.post('/search/'+ movieId, (movie) => {
		//console.log(movie);  // show full movie object output
		showMovieInfo(movie);
	});
}

function showMovieInfo(movie) {
	let output = `
		<div class="row">
			<div class="col-md-4">
				<img src="${movie.Poster}" class="thumbnail">
			</div>
			<div class="col-md-8">
				<h2>${movie.Title}</h2>
				<ul class="list-group">
					<li class="list-group-item"><strong>Genre: &nbsp;</strong>${movie.Genre}</li>
					<li class="list-group-item"><strong>Release Date: &nbsp;</strong>${movie.Released}</li>
					<li class="list-group-item"><strong>Rated: &nbsp;</strong>${movie.Rated}</li>
					<li class="list-group-item"><strong>IMDB Rating: &nbsp;</strong>${movie.imdbRating}</li>
					<li class="list-group-item"><strong>Directed by: &nbsp;</strong>${movie.Director}</li>
					<li class="list-group-item"><strong>Written by: &nbsp;</strong>${movie.Writer}</li>
					<li class="list-group-item"><strong>Actors: &nbsp;</strong>${movie.Actors}</li>
				</ul>
				<a href="http://imdb.com/title/${movie.imdbID}" target="blank" class="btn btn-primary">
					View on IMDB
				</a>
			</div>
		</div>
		<div class="row">
			<div class="well">
				<h3>Plot summary</h3>
				${movie.Plot}
				<hr>
				<a href="/" class="btn btn-default">Return to search</a>
			</div>
		</div>
	`;

	$('#movie').html(output);
}