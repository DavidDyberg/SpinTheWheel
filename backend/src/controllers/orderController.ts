import type { FastifyReply, FastifyRequest } from "fastify"
import { User } from "../models/userModel.js"
import { Order } from "../models/orderModel.js"


interface OrderQuery {
    user_id: string
}

export const createOrder = async (req: FastifyRequest< {Querystring: OrderQuery}>, res: FastifyReply) => {
    try {
        const { user_id } = req.query
        const newOrder = new Order({user_id})
        await newOrder.save()
        const order_id = newOrder._id
        const user =await User.findOneAndUpdate({_id: user_id}, {$addToSet: {orders: order_id}}, { $inc: {spins: 1}})
        if(!user){
            res.code(500).send({message: "User not found."})
        } else {
            res.code(200).send({message: `New order successful. Order ${order_id} has granted ${user.name} with 1 spin!`})
        }

    } catch(err: unknown) {
        if(err instanceof Error) {
            console.error('Error when creating order: ', err)
        }
    }
}