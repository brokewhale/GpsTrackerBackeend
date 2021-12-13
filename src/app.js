let express = require("express");
let app = express();
let router = require("./routes/index");
let bodyParser = require("body-parser");
let cors = require("cors");

global.__root = __dirname + "/";
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

module.exports = app;
