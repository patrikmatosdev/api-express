const express = require("express");
const app = express();

const routerUsers = require("./src/routes/users");

app.use("/users", routerUsers);

module.exports = app;
