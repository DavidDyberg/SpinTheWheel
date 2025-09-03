import mongoose, { Document, Schema } from "mongoose";

export interface IRewards extends Document {
  user_id: string;
  title: string;
  delivered: boolean;
  created_at: string;
}

const rewardsSchema: Schema = new Schema({
  user_id: { type: String },
  title: { type: String },
  delivered: { type: Boolean, default: false },
  created_at: { type: String, default: () => new Date().toISOString() },
});

export const Rewards = mongoose.model<IRewards>("Rewards", rewardsSchema);
