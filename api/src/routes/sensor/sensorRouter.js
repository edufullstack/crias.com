const express = require('express');
const router = express.Router();
const { createSensor } = require('../../controllers/sensor/sensor');

router.get('/', async (req, res) => {
  try {
    let sensor = await getSensor();
    res.status(200).json(sensor);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    let {
      identificador,
      freCardiaca,
      preSanguinea,
      freRespiratoria,
      temperatura,
    } = req.body;

    let sensor = await createSensor(
      identificador,
      freCardiaca,
      preSanguinea,
      freRespiratoria,
      temperatura
    );
    res.status(200).json(sensor);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
