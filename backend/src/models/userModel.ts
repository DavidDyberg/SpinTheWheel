import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    orders: string[];
    spins: number;
    rewards: string[];
    reward: string;
    created_at: string;

}
const userSchema: Schema = new Schema ({
    name: {type: String, required:true},
    orders:[{type: String}],
    spins: {type: Number, default: 0},
    rewards: [{type: String}],
    reward: {type: String},
    created_at: {type: String, default: () => new Date().toISOString() }

})
export const User = mongoose.model<IUser>("User", userSchema)