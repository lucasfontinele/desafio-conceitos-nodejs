const express = require("express");
const router = express.Router();

const { index, store, dashboard } = require("./controller");

router.route("/").get(index);
router.route("/dashboard").get(dashboard);
router.route("/").post(store);

module.exports = router;
