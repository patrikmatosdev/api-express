const express = require("express");
const router = express.Router();

// RETORNA TODOS OS USUARIOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Retorna todos os Usuários",
  });
});

// INSERE UM USUARIO
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Insere um Usuário",
  });
});

// RETORNA UM UNICO USUÁRIO EXPECIFICO
router.get("/:id_user", (req, res, next) => {
  const id = req.params.id_user;

  if (id == "especifico") {
    res.status(200).send({
      message: "Detalhes do Usuário",
      id: id,
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID",
    });
  }
});

// ALTERA UM USUARIO
router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Detalhes do Usuário",
  });
});

//DELETA UM USUARIO
router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Usuario Deletado",
  });
});

module.exports = router;
