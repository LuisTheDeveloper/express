const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const fetch = require("node-fetch");

router.get("/", (req, res) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    res.send("fake data success");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/posts", (req, res) => {
  try {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => res.json(json));
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
