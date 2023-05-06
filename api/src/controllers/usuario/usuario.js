const { Usuario } = require('../../db');
const bcryptjs = require('bcryptjs');

const getRol = async (id, password) => {
  try {
    const hash = await Usuario.findOne({
      where: { id },
      attributes: ['password'],
    });

    if (hash) {
      let compare = await bcryptjs.compare(password, hash.dataValues.password);
      if (compare) {
        let buscarUsuario = await Usuario.findOne({
          where: { id: id },
        });
        return buscarUsuario;
      } else {
        return new Error('Contrasena invalida');
      }
    }
  } catch (error) {
    return error.message;
  }
};

const addUser = async (rol, password) => {
  try {
    if (password) {
      let hash = await bcryptjs.hash(password, 8);
      let agregarUsuario = await Usuario.create({
        rol,
        password: hash,
      });
      return agregarUsuario;
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getRol,
  addUser,
};
