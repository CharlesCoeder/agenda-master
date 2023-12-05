import mongoose, { Schema } from "mongoose";

const deadlineSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
  },
  { _id: false } // No need for a separate _id for each deadline
);

const collegeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    deadlines: [deadlineSchema],
    contactInfo: {
      admissionsOffice: {
        type: String,
      },
      financialAidOffice: {
        type: String,
      },
      housingOffice: {
        type: String,
      },
      careerServices: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const College =
  mongoose.models.College || mongoose.model("College", collegeSchema);

export default College;
