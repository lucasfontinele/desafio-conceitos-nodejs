const express = require("express");
const repositories = require("./repositories/routes");

const router = express.Router();

router.use("/repositories", repositories);

module.exports = router;
