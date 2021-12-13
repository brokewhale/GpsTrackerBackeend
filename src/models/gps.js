var mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gpsSchema = new Schema(
  {
    deviceName: {
      type: String,
      required: true,
    },
    location: [
      {
        longitude: {
          type: String,
          required: true,
        },
        latitude: {
          type: String,
          required: true,
        },
        time: { type: Date, default: new Date() },
      },
    ],
  },
  { id: true }
);

// Duplicate the ID field.
gpsSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
gpsSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const GpsModel = mongoose.model("GpsModel", gpsSchema);

module.exports = GpsModel;
