const express = require("express");
const cors = require("cors");

const server = express();

//Configurar servidor
server.use(cors());
server.use(express.json());

//Arrancar servidor
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get("/users", (req, res) => {
  const response = {
    users: [{ name: "Bárbara" }, { name: "Marta" }],
  };
  res.json(response);
});
