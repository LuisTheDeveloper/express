// BASE SETUP
// ==============================================

var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
app.get("/sample", function (req, res) {
  res.send("this is a sample!");
});

// we'll create our routes here
// get an instance of router
const router = express.Router();

// route middleware that will happen on every request
router.use(function (req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  next();
});

// home page route (http://localhost:8080)
router.get("/", function (req, res) {
  res.send("im the home page!");
});

// route with parameters (http://localhost:8080/hello/:name)
router.get("/hello/:name", function (req, res) {
  res.send("hello " + req.params.name + "!");
});

// about page route (http://localhost:8080/about)
router.get("/about", function (req, res) {
  res.send("im the about page!");
});

// apply the routes to our application
app.use("/", router);

app.use("/weather", require("./route/weather"));
app.use("/fakedata", require("./route/fakeData"));

// START THE SERVER
// ==============================================
// app.listen(port);

console.log("Magic happens on port " + port);

module.exports = app;
