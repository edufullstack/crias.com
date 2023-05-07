const { Sensor, Crias } = require('../../db');

const createSensor = async (
  identificador,
  freCardiaca,
  preSanguinea,
  freRespiratoria,
  temperatura
) => {
  try {
    let identificado = await Crias.findByPk(Number(identificador));
    let newSensor = await Sensor.create({
      freCardiaca: Number(freCardiaca),
      preSanguinea: Number(preSanguinea),
      freRespiratoria: Number(freRespiratoria),
      temperatura: parseFloat(temperatura),
    });
    await newSensor.setCria(identificado);
    return newSensor;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  createSensor,
};
