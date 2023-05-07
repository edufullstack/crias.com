const { Router } = require('express');
const usuarioRouter = require('../routes/usuario/usuarioRouter');
const criasRouter = require('../routes/crias/criasRouter');
const sensorRouter = require('../routes/sensor/sensorRouter');

const router = Router();

router.use('/usuario', usuarioRouter);
router.use('/crias', criasRouter);
router.use('/sensor', sensorRouter);

module.exports = router;
