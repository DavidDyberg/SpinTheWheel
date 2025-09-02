import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    spins: number;
    created_at: string;

}
const userSchema: Schema = new Schema ({
    name: {type: String, required:true},
    spins: {type: Number, default: 0},
    created_at: {type: String, default: () => new Date().toISOString() }

})
export const User = mongoose.model<IUser>("User", userSchema)