const express = require("express");
const repositories = require("./repositories/routes");
const transactions = require("./transactions/routes");

const router = express.Router();

router.use("/repositories", repositories);
router.use("/transactions", transactions);

module.exports = router;
