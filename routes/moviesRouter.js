const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router();

moviesRouter.get("/", moviesController.moviesListGet);

module.exports = moviesRouter;
