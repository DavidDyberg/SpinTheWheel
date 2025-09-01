import type { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../models/userModel.js"

export const getUsers = async (req: FastifyRequest, res: FastifyReply) => {
    const users = await User.find();
    if(!users || users.length === 0) {
        res.code(404).send({message: `Can't find any users.`})
    }
    res.send(users)
}