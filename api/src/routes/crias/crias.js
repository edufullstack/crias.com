const express = require('express');
const router = express.Router();
const { registerNew, getCrias } = require('../../controllers/crias/crias');

router.get('/', async (req, res) => {
  try {
    let crias = await getCrias();
    console.log(crias);
    res.status(200).send(crias);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let { proveedor, identificador, peso, costo, nombre, descripcion } =
      req.body;
    let registro = await registerNew(
      proveedor,
      identificador,
      peso,
      costo,
      nombre,
      descripcion
    );
    res.status(200).send(registro);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
