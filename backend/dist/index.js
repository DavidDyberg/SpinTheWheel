"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = require("./db");
var userController_1 = require("./controllers/userController");
var orderController_1 = require("./controllers/orderController");
dotenv_1.default.config();
var fastify = (0, fastify_1.default)({
    logger: true,
});
var port = 3000;
(0, db_1.connectDB)();
fastify.get("/", function (req, reply) {
    reply.send("Hello Ida");
});
fastify.get('/users', userController_1.getUsers);
fastify.post('/user', orderController_1.createOrder);
fastify.listen({ port: port }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});
