const express = require("express");
const app = express();

const routerUsers = require("./src/routes/users");
const routerExercises = require("./src/routes/exercises");

app.use("/users", routerUsers);
app.use("/exercises", routerExercises);

module.exports = app;
