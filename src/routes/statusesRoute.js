const express = require("express");
const router = express.Router();

const statusController = require("../controllers/statusController");

router.get("/", statusController.getAllStatus);
router.get("/:checkpointsId", statusController.getStatusById);
router.patch("/", statusController.updateStatus);

module.exports = router;
