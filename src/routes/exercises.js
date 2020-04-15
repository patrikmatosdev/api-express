const express = require("express");
const router = express.Router();

// RETORNA TODOS OS USUARIOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna os exercícios",
  });
});

// INSERE UM EXERCICIO
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Exercício Criado",
  });
});

// RETORNA UM UNICO USUÁRIO EXPECIFICO
router.get("/:id_exercise", (req, res, next) => {
  const id = req.params.id_exercise;

  res.status(200).send({
    message: "Detalhes do Exercício",
    id: id,
  });
});

//DELETA UM EXERCÍCIO
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Exercicío Alterado",
  });
});

module.exports = router;
