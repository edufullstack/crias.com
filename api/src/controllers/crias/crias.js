const { Crias } = require('../../db');

export const getCrias = async () => {
  try {
    let crias = await Crias.findAll({
      where: {
        saludable: false,
      },
    });
    console.log(crias);
    if (crias) {
      return crias;
    } else {
      throw new Error('No se encontraron registros');
    }
  } catch (error) {
    return error.message;
  }
};

const registerNew = async (
  proveedor,
  identificador,
  peso,
  costo,
  nombre,
  descripcion
) => {
  try {
    let nuevo = await Crias.create({
      proveedor,
      identificador,
      peso,
      costo,
      nombre,
      descripcion,
    });
    return nuevo;
  } catch (error) {
    return error.message;
  }
};

module.exports = { registerNew };
