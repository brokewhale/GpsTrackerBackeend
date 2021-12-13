var mongoose = require("mongoose");
let MONGO_URL = process.env.MONGO_URL;
let status = false;
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("Failed to Connect", err);
      status = true;
    } else {
      console.log("Connection Successful ");
      status = false;
    }
  }
);
