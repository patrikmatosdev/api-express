const express = require("express");
const app = express();
const morgan = require("morgan");

const routerUsers = require("./src/routes/users");
const routerExercises = require("./src/routes/exercises");

app.use(morgan("dev"));

app.use("/users", routerUsers);
app.use("/exercises", routerExercises);

//Erro - Router Undefined
app.use((req, res, next) => {
  const err = new Error("Não encontrado");
  err.status(404);
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    error: {
      mensage: error.message,
    },
  });
});

module.exports = app;
