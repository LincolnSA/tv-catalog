const express = require("express");
const routes = express.Router();

const tvController = require("./controllers/tvController");
const typeController = require("./controllers/typeController");

routes.get("/tvs", tvController.index);
routes.get("/tvs/:id", tvController.show);
routes.get("/types", typeController.index);
routes.get("/types/:id", typeController.show);

module.exports = routes;
