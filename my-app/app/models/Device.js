import mongoose, { Schema } from "mongoose";

const deviceSchema = new Schema(
  {
    name: { type: String },
    serial: { type: String, unique: true, require: true },
    disc: { type: String },
    brand: { type: String },
    category: { type: String},
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String },
    price: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const Device = mongoose.models.Device || mongoose.model("Device", deviceSchema);

export default Device;
