import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    orders: string[];
    spins: number;
    rewards: string[];
    reward: string;

}
const userSchema: Schema = new Schema ({
    name: {type: String, required:true},
    orders:[{type: String}],
    spins: {type: Number},
    rewards: [{type: String}],
    reward: {type: String},

})
export const User = mongoose.model<IUser>("User", userSchema)