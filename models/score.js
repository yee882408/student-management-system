import { Schema, model, models } from "mongoose";

const ScoreSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId },
  year: {
    type: String,
  },
  semester: {
    type: String,
  },
  chinese: {
    type: String,
  },
  math: {
    type: String,
  },
  english: {
    type: String,
  },
});

const Score = models.Score || model("Score", ScoreSchema);

export default Score;
