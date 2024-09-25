import { Schema, model } from "mongoose";
import { IMachine } from "./IMachine";

const machineSchema = new Schema<IMachine>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ["Pump", "Fan"],
  },
});

const MACHINE = model("Machine", machineSchema);
export default MACHINE;
