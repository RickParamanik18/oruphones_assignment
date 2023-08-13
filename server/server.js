const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const router = require("./router/routes/user.router");

const app = express();
require("dotenv").config();

app.use(
    cors({
        origin: true,
        credentials: true,
    })
);
app.use(cookieParser());
app.use("/api", router);
app.use(express.static(__dirname + "/uploads")); //serving uploads folder as static directory

app.listen(
    process.env.PORT,
    console.log(`LISTENING TO PORT ${process.env.PORT}`)
);

app.get("/", (req, res) => {
    res.send("server running");
});
