import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../models/userModel";
import { Rewards } from "../models/rewardsModel";

export const spinAction = async (req: FastifyRequest, res: FastifyReply) => {

    const { user_id } = req.params as {user_id: string}
    console.log(user_id)
    let userReward =''
    
    const num = Math.floor(Math.random()*100)
    console.log(num)
    switch (true) {
        case num <= 50:
            userReward = "Triss-lott"
            break;
        case num <= 70:
            userReward = "Biobiljett"
            break;
        case num <= 85:
            userReward = "Macbook Pro"
            break
        case num <= 95:
            userReward = "Bali resa"
            break
        case num <= 100:
            userReward = "Yacht"
            break
    }

    const newReward = new Rewards({user_id: user_id, title: userReward })
    await newReward.save()
    console.log(newReward)
}