const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

const sayHello = (req, res, next) => {
  const name = req.query.name;
  const content = name ? `Hello, ${name}!` : "Hello!";
  res.send(content);
};

app.use("/hello", sayHello);

module.exports = app;
