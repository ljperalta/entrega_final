const express = require("express");
const router = express.Router();
const pets = require("./mocks.router");
const users = require("./users");
const adoption = require("./adoption.router");
const sessions = require("./sessions.router");

router.get("/", (req, res) => {
    res.send("Bienvenido a la API de Mocks");
});
router.use("/api/pets", pets);
router.use("/api/adoption", adoption);
router.use("/api/users", users);
router.use("/api/sessions", sessions);

module.exports = router;