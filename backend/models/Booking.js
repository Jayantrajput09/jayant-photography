import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: "",
    },
    eventType: {
      type: String,
      default: "",
    },
    date: {
      type: Date,
      default: null,
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);