import Fastify from "fastify";
import fastifyMongo from "@fastify/mongodb";
import dotenv from "dotenv";
import { getUsers } from "../build/controllers/userController.js";
import { connectDB } from "../build/db.js";
import { createOrder } from "../build/controllers/orderController.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

const port = 3000;

connectDB()

fastify.get("/", function (req, reply) {
  reply.send("Hello Ida");
});

fastify.get('/users', getUsers)

fastify.post('/user', createOrder)

fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
