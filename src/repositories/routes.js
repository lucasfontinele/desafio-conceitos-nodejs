const express = require("express");
const router = express.Router();

const {
  index,
  store,
  update,
  remove,
  likeRepository
} = require("./controller");
const {
  validateStore,
  validateUpdate,
  validateUuid
} = require("./validations");

router.route("/").get(index);
router.route("/").post(validateStore, store);

router.route("/:id").put(validateUpdate, update);
router.route("/:id").delete(validateUuid, remove);

router.route("/:id/like").post(validateUuid, likeRepository);

module.exports = router;
