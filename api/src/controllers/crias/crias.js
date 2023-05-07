const { Crias, Usuario } = require('../../db');

const getCrias = async () => {
  try {
    let crias = await Crias.findAll();

    return crias || [];
  } catch (error) {
    return error.message;
  }
};

const updateCria = async (
  identificador,
  saludable,
  dieta,
  tratamiento,
  cuarentena
) => {
  try {
    console.log(identificador, saludable, dieta, tratamiento, cuarentena);
    if (dieta) {
      console.log('sie entramos');
      let cria = await Crias.update({ dieta }, { where: { identificador } });
      console.log(cria);
      return cria;
    }
    if (tratamiento) {
      let cria = await Crias.update(
        { tratamiento },
        { where: { identificador } }
      );
      return cria;
    }
    if (cuarentena) {
      let cria = await Crias.update(
        { cuarentena },
        { where: { identificador } }
      );
      return cria;
    }
    let cria = await Crias.update({ saludable }, { where: { identificador } });
    return cria;
  } catch (error) {
    return error.message;
  }
};

const registerNew = async (proveedor, peso, costo, nombre, descripcion, id) => {
  try {
    let user = await Usuario.findByPk(Number(id));
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    let nuevo = await Crias.create({
      proveedor,
      fecha: formattedDate,
      peso: Number(peso),
      costo: parseFloat(costo),
      nombre,
      descripcion,
      usuario_cria: user.id,
    });
    return nuevo;
  } catch (error) {
    return error.message;
  }
};

module.exports = { registerNew, getCrias, updateCria };
