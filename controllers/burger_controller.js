var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgersData) {
        res.render("index", { burger_data: burgersData });
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function () {
        res.redirect("/burgers");
    });
});

router.post("/burgers/create/:id", function (req, res) {
    var id = req.params.id;
    console.log("id", id);

    burger.update(id, function () {
        res.redirect("/burgers");
    });
});

module.exports = router;