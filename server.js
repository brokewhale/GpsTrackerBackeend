require("dotenv").config();
let db = require("./src/db");
let app = require("./src/app");
let port = process.env.PORT || 5000;

let server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
