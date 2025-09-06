const express = require("express");
const router = express.Router();
const pets = require("./mocks.router");
const users = require("./users");

router.use("/api/mocks", pets);
router.use("/api/mocks/mockingusers", users);

module.exports = router;