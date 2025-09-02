import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { getUsers } from "./controllers/userController";
import { createOrder } from "./controllers/orderController";

function routes(server: FastifyInstance, options: FastifyPluginOptions) {
    server.route({
        method: 'GET',
        url: '/users',
        handler: (req: FastifyRequest, reply: FastifyReply) => {getUsers}
    })
    server.route({
        method: 'POST',
        url: '/user',
        handler: (req: FastifyRequest, reply: FastifyReply) => {createOrder}
    })
}
export default routes