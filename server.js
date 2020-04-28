const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const restricted = require("./auth/restricted-middleware")

const userRouter = require("./users/users-router")
const authRouter = require("./auth/auth-router")
const wordlistsRouter = require("./wordlists/wordlists-router")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/auth", authRouter)
server.use("/users", restricted, userRouter)
server.use("/wordlists", restricted, wordlistsRouter)

server.get("/", (req,res) => {
    res.json({message: "Server is up and running"})
})

module.exports = server;