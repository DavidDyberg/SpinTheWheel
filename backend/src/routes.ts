import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { getUsers } from "./controllers/userController";
import { createOrder } from "./controllers/orderController";
import { getUserRewards } from "./controllers/rewardsController";
import { spinAction } from "./controllers/spinController";

function routes(server: FastifyInstance, options: FastifyPluginOptions) {
  server.route({
    method: "GET",
    url: "/users",
    handler: getUsers,
  });
  server.route({
    method: "POST",
    url: "/user",
    handler: createOrder,
  });
  server.route({
    method: "GET",
    url: "/users/:user_id/rewards",
    handler: getUserRewards,
  });
  server.route({
    method: 'GET',
    url:'/users/:user_id/spin',
    handler: spinAction
  })
}
export default routes;
