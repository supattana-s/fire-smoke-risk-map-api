const express = require("express");
const router = express.Router();

const statusController = require("../controllers/statusController");

router.get("/:checkpointsId", statusController.getStatus);
router.patch("/", statusController.updateStatus);

module.exports = router;
