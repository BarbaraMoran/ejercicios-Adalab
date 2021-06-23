const express = require("express");
const cors = require("cors");
const users = require("./data.json");

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  // find user by userId
  const user = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  // response with selected user data or error
  if (user === undefined) {
    res.json({ error: "user-not-found" });
  } else {
    res.json(user);
  }
});

app.get("/users/:userId/orders", (req, res) => {
  const user = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  res.json(user.orders);
});

app.get("/users/:userId/orders/:orderId", (req, res) => {
  const user = users.find(
    (user) => user.userId === parseInt(req.params.userId)
  );

  console.log(user);

  const order = user.orders.find(
    (order) => order.orderId === parseInt(req.params.orderId)
  );

  console.log(order);

  // response with selected user data or error
  if (order === undefined) {
    res.json({ error: "order-not-found" });
  } else {
    res.json(order);
  }
});
