import type { FastifyReply, FastifyRequest } from "fastify";
import { Rewards } from "../models/rewardsModel";
import { User } from "../models/userModel";

export const getUserRewards = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  try {
    const { user_id } = req.params as { user_id: string };

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const rewards = await Rewards.find({ user_id });

    if (!rewards || rewards.length === 0) {
      return res.status(404).send({
        message: "This user has no rewards",
        user_id,
      });
    }

    res.send({
      user_id,
      user_name: user.name,
      rewards_count: rewards.length,
      rewards,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).send({
        message: "Error fetching rewards",
        error: err.message,
      });
    }
  }
};
