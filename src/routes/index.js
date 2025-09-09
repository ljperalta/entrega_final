const express = require("express");
const router = express.Router();
const pets = require("./mocks.router");
const users = require("./users");

router.get("/", (req, res) => {
    res.send("Bienvenido a la API de Mocks");
});
router.use("/api/mocks", pets);
router.use("/api/mocks/mockingusers", users);

module.exports = router;