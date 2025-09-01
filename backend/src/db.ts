import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL as string)
        console.log("Db connected")

    }catch(err) {
        console.error('Could not connect to db: ', err)
        process.exit()
    }
}