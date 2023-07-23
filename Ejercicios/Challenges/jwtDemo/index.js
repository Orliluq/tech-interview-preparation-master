const express = require("express");
const server = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Client} = require("pg");

const PORT = 3001;

server.use(express.json());

server.listen(PORT, () => {
  console.log("Server listening on port 3001");
});

const credenctials = {
  host: "localhost",
  port: 5432,
  database: "users",
  user: "postgres",
  password: "18Mayo1987",
};

// RUTAS

server.get("/users", async (req, res) => {
  try {
    const client = new Client(credenctials);
    await client.connect();
    const response = await client.query("SELECT * FROM users");
    await client.end();
    res.status(200).send(response.rows);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

server.post("/signup", async (req, res) => {
  try {
    const {email} = req.body;
    const password = await bcrypt.hash(req.body.password, 10);

    const client = new Client(credenctials);
    await client.connect();

    const query = "INSERT INTO users(email,password) VALUES ($1,$2)";
    const values = [email, password];
    await client.query(query, values);

    const newUser = await client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    await client.end();

    jwt.sign({id: newUser.id}, "lapalabrasecreta", (error, token) => {
      res.status(200).json({token});
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

const verificacionDeTokenMiddleware = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  // "Bearer aquiestaeljwt"
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" "); // [Bearer , aquiestaeljwt]
    const bearerToken = bearer[1];

    req.user = bearerToken;
    next();
  } else {
    throw new Error("You shall not pass!!!");
  }
};

server.get("/perfil", verificacionDeTokenMiddleware, (req, res) => {
  try {
    jwt.verify(req.user, "lapalabrasecreta", (error, data) => {
      if (error) throw new Error("You shall not pass!!!");
      else res.status(200).send("Bienvenido pase usted");
    });
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});
