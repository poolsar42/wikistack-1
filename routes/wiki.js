const express = require("express");
const addPage = require("../views/addPage");
const { Page } = require("../models");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send();
});

router.post("/", async (req, res, next) => {
  try {
    const title = req.body.title;
    const content = req.body.content;
    const page = await Page.create({
      title: title,
      content: content,
    });
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
