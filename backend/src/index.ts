import Fastify from "fastify";
import dotenv from "dotenv";
import routes from "./routes";
import { connectDB } from "./db";
import cors from "@fastify/cors";

dotenv.config();
async function startServer() {
  const fastify = Fastify({
    logger: true,
  });
  await fastify.register(cors, {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  });

  const port = 3000;

  connectDB();

  fastify.get("/", async (req, reply) => {
    reply.send("Hello Ida");
  });

  fastify.register(routes);

  fastify.listen({ port: port }, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

startServer();
