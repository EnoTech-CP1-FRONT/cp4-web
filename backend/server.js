const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { v4: uuid } = require("uuid");

const app = express();

const port = 5001;

app.use(cors());

app.use(bodyParser.json());

let carros = [];

app.post("/carro", (req, res) => {
  const { marca, modelo } = req.body;
  if (!marca || !modelo) {
    return res.status(400).json({ error: "Campos Inválidos" });
  }
  const novoCarro = { id: uuid(), marca, modelo };
  carros.push(novoCarro);
  res.status(200).json(novoCarro);
});

app.get("/carro", (req, res) => {
  res.json(carros);
});

app.put("/carro/:id", (req, res) => {
  const carroId = req.params.id;
  const { marca, modelo } = req.body;
  if (!marca || !modelo) {
    return res.status(400).json({ error: "Campos Inválidos" });
  }

  const carroIndex = carros.findIndex((carro) => carro.id === carroId);

  if (carroIndex === -1) {
    return res.status(404).json({ error: "Carro não encontrado" });
  }

  carros[carroIndex] = { id: carroId, marca, modelo };

  res.json(carros[carroIndex]);
});

app.delete("/carro/:id", (req, res) => {
  const carroId = req.params.id;
  const inicioCarros = carros.length;

  carros = carros.filter((carro) => carro.id !== carroId);

  if (carros.length === inicioCarros) {
    return res.status(404).json({ error: "Carro não encontrado" });
  }
  res.status(200).send("Carro removido com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor rodandos na porta http://localhost:${port}`);
});
