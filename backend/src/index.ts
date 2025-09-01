import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

const port = 3000;

fastify.get("/", function (request, reply) {
  reply.send("Hello Ida");
});

fastify.listen({ port: port }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
