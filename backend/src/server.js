const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const port = 3333;
const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Servidor ON, http://localhost:${port}`));
