import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../models/userModel";
import { Rewards } from "../models/rewardsModel";

export const spinAction = async (req: FastifyRequest, res: FastifyReply) => {

    const reward_one = '50/100'
    const reward_two = '20/100'
    const reward_three = '15/100'
    const reward_four = '10/10'
    const reward_five = '5/100'

    const { user_id } = req.params as {user_id: string}
    console.log(user_id)
    let userReward =''
    
    const num = Math.floor(Math.random()*100)
    console.log(num)
    switch (true) {
        case num <= 50:
            userReward = reward_one
            break;
        case num <= 70:
            userReward = reward_two
            break;
        case num <= 85:
            userReward = reward_three
            break
        case num <= 95:
            userReward = reward_four
            break
        case num <= 100:
            userReward = reward_five
            break
    }

    const newReward = new Rewards({user_id: user_id, title: userReward })
    await newReward.save()
    console.log(newReward)
}