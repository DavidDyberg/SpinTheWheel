import Fastify from "fastify";
import fastifyMongo from "@fastify/mongodb";
import dotenv from "dotenv";
import { getUsers } from "../build/controllers/userController.js";
import { connectDB } from "../build/db.js";

dotenv.config();

const fastify = Fastify({
  logger: true,
});

const port = 3000;

// fastify.register(fastifyMongo, {
//   forceClose: true,
//   url: process.env.MONGODB_URL as string,
//   database: "spin_the_wheel",
// });

// fastify.ready((err) => {
//   if (fastify.mongo.db) {
//     console.log(`Connected to MongoDB: ${fastify.mongo.db.databaseName}`);
//   } else {
//     console.error("Failed to connect to MongoDB", err);
//   }
// });

connectDB()

fastify.get("/", function (req, reply) {
  reply.send("Hello Ida");
});

fastify.get('/users', getUsers)

fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
