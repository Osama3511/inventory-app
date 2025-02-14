const mockMoviesDb = ["movie1", "movie2", "movie3"];

exports.moviesListGet = (req, res) => {
  res.render("movies", { movies: mockMoviesDb });
};
