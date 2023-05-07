const express = require('express');
const router = express.Router();
const {
  registerNew,
  getCrias,
  updateCria,
} = require('../../controllers/crias/crias');

router.get('/', async (req, res) => {
  try {
    let crias = await getCrias();
    res.status(200).send(crias);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put('/', async (req, res) => {
  try {
    let { identificador, saludable, dieta, tratamiento, cuarentena } = req.body;
    let actualizado = await updateCria(
      identificador,
      saludable,
      dieta,
      tratamiento,
      cuarentena
    );
    res.status(200).json(actualizado);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let { proveedor, peso, costo, nombre, descripcion, id } = req.body;
    let registro = await registerNew(
      proveedor,
      peso,
      costo,
      nombre,
      descripcion,
      id
    );
    res.status(200).json(registro);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
