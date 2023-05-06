const { Usuario } = require('../../db');

const getRol = async (id) => {
  try {
    let buscarUsuario = await Usuario.findOne({
      where: { id: id },
    });
    console.log(buscarUsuario);
    return buscarUsuario;
  } catch (error) {
    return error.message;
  }
};

const addUser = async (rol) => {
  try {
    let agregarUsuario = await Usuario.create({
      rol,
    });
    return agregarUsuario;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getRol,
  addUser,
};
