const express = require("express");
const helmet = require("helmet");
const server = express();

const usersRouter = require("./users/userRouter");
const authRouter = require("./auth/authRouter");

server.use(helmet());
server.use(express.json());

server.use("/api/", authRouter);
server.use("/api/", usersRouter);

module.exports = server;