const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.homeRenderGet);
indexRouter.get("/add", indexController.createMoviesGet);
module.exports = indexRouter;
