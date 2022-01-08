const app = require("express").Router(); // ** router
const controller = require("../../controllers/app"); // ** controllers for polls

/**
 *  @description API for saving scrap
 *  @method GET /create
 */
app.post("/create", controller.create);

/**
 *  @description API for loading add scrapped data
 *  @method GET /
 */
app.get("/", controller.viewAll);

/**
 *  @description API for getting specific scrapper
 *  @method GET /:code
 */
// app.get("/:code", controller.view);

module.exports = app;
