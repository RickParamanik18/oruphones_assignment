const express = require("express");
const router = express.Router();
const udlController = require("../../controllers/udl.controller");
const { isAuthorized } = require("../../middlewares/isAuthorized");

router.post("/", isAuthorized, udlController.createItem);
router.put("/", isAuthorized, udlController.updateItem);
router.get("/", isAuthorized, udlController.getItems);
router.delete("/", isAuthorized, udlController.deleteItem);

module.exports = router;
