import { InferSchemaType, Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
    client: { type: String, required: true },
    location: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true }
);

type Project = InferSchemaType<typeof projectSchema>;

export default model<Project>("Project", projectSchema);
