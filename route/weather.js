const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const fetch = require("node-fetch");

const apiKey = API_KEY;

router.get("/:city", async (req, res) => {
  console.log(req.params.city);
  console.log(apiKey);
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${req.params.city}&units=metric&appid=${apiKey}`
    );
    if (!result) return res.status(400).json({ msg: "Weather unavailable!" });
    console.log(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
