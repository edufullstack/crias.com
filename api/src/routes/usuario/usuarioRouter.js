const express = require('express');
const router = express.Router();
const { getRol, addUser } = require('../../controllers/usuario/usuario');

router.get('/', async (req, res) => {
  try {
    const { id, password } = req.query;
    const usuario = await getRol(Number(id), password);
    res.status(200).send(usuario);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { rol, password } = req.body;
    const registro = await addUser(rol, password);
    res.status(200).send('Registro exitoso');
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
