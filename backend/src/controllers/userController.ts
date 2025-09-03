import type { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../models/userModel";

export const getUsers = async (req: FastifyRequest, res: FastifyReply) => {
  const users = await User.find();
  if (!users || users.length === 0) {
    res.status(404).send({ message: `Can't find any users.` });
  }
  res.send(users);
};

export const getUser = async (req: FastifyRequest, res: FastifyReply) => {
  const { user_id } = req.params as { user_id: string };

  const user = await User.findById(user_id);

  if (!user) {
    res.status(404).send({ message: "This user do not exist" });
  }

  res.send(user);
};
