const { Router } = require('express');
const usuarioRouter = require('../routes/usuario/usuarioRouter');

const router = Router();

router.use('/usuario', usuarioRouter);

module.exports = router;
