import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
    user_id: string;
    created_at: string;

}
const orderSchema: Schema = new Schema ({
    user_id:{type: String},
    created_at: {type: String, default: () => new Date().toISOString() }

})
export const Order = mongoose.model<IOrder>("Order", orderSchema)