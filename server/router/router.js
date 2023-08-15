const express = require("express");
const router = express.Router();
const userRouter = require("./routes/user.router");
const udlRouter = require("./routes/udl.router");

router.use("/user", userRouter);
router.use("/udl", udlRouter);

module.exports = router;
