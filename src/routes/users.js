const express = require("express");
const router = express.Router();

// RETORNA TODOS OS USUARIOS
router.get("/", (req, res, next) => {
  res.status(200).send({
    message: "Usando o GET dentro da rota de usuarios",
  });
});

// INSERE UM USUARIO
router.post("/", (req, res, next) => {
  res.status(201).send({
    message: "Usando o POST dentro da rota de usuarios",
  });
});

// RETORNA UM UNICO USUÁRIO EXPECIFICO
router.get("/:id_user", (req, res, next) => {
  const id = req.params.id_user;

  if (id == "especifico") {
    res.status(200).send({
      message: "Usando o GET de um ID de usuario epecífico",
      id: id,
    });
  } else {
    res.status(200).send({
      message: "Você passou um ID",
    });
  }
});

router.patch("/", (req, res, next) => {
  res.status(201).send({
    message: "Usando o PATCH dentro da roda de usuarios",
  });
});

router.delete("/", (req, res, next) => {
  res.status(201).send({
    message: "Usando o DELETE dentro da rota de usuarios",
  });
});

module.exports = router;
