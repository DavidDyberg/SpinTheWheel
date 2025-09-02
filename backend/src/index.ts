import Fastify from "fastify";
import dotenv from "dotenv";
import { getUsers } from "./controllers/userController";
import { createOrder } from "./controllers/orderController";
import routes from "./routes";
import { connectDB } from "./db";


dotenv.config();

const fastify = Fastify({
  logger: true,
});

const port = 3000;

connectDB()

fastify.get("/", function (req, reply) {
  reply.send("Hello Ida");
});

// fastify.register(routes)
fastify.get('/users', getUsers)

fastify.post('/user', createOrder)

fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
