const Validate = (input) => {
  let errors = {};
  if (!input.proveedor) {
    errors.proveedor = 'Ingrese proovedor';
  }
  if (!input.peso) {
    errors.peso = 'Ingrese peso';
  }
  if (!input.costo) {
    errors.costo = 'Ingrese costo';
  }
  if (!input.nombre) {
    errors.nombre = 'Ingrese nombre';
  }
  if (!input.descripcion) {
    errors.descripcion = 'Ingrese descripcion';
  }
  return errors;
};

export default Validate;
