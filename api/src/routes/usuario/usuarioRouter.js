const express = require('express');
const router = express.Router();
const { getRol, addUser } = require('../../controllers/usuario/usuario');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await getRol(id);
    res.status(200).send(usuario);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { rol } = req.body;
    console.log(req.body);
    const registro = await addUser(rol);
    res.status(200).send(registro);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
