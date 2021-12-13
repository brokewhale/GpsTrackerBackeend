var express = require("express");
const GpsModel = require("../models/gps");
const router = express.Router();

//GET Device
router.get("/device/:id", async (req, res) => {
  try {
    const device = await GpsModel.findById(req.params.id);
    res.json(device);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update device Location
router.post("/add/:id", async (req, res) => {
  const device = await GpsModel.findById(req.params.id);
  if (!device) res.json({ message: "Not Found" });
  else {
    console.log({
      longitude: req.body.longitude,
      latitude: req.body.latitude,
    });
    let update = await GpsModel.findByIdAndUpdate(req.params.id, {
      $push: {
        location: {
          longitude: req.body.longitude,
          latitude: req.body.latitude,
        },
      },
    });
    res.json(update);
  }
});

router.get("/create/:name", async (req, res) => {
  let device = await GpsModel.create({
    deviceName: req.params.name,
  });
  res.json(device);
});

module.exports = router;
