const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const fetch = require("node-fetch");

const apiKey = "3b5b2b535e8b6802663007320719f2a1";

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
