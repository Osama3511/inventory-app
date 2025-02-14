exports.homeRenderGet = (req, res) => {
  res.render("index");
};
exports.createMoviesGet = (req, res) => {
  res.render("addMovie");
};

const mockMoviesDb = ["movie1", "movie2", "movie3"];

exports.moviesListGet = (req, res) => {
    
}