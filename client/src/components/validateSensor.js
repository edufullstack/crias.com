const ValidateSensor = (input) => {
  let errors = {};
  if (!input.identificador) {
    errors.identificador = 'Ingrese identificador';
  }
  if (!input.freCardiaca) {
    errors.freCardiaca = 'Ingrese freCardiaca';
  }
  if (!input.preSanguinea) {
    errors.preSanguinea = 'Ingrese preSanguinea';
  }
  if (!input.freRespiratoria) {
    errors.freRespiratoria = 'Ingrese freRespiratoria';
  }
  if (!input.temperatura) {
    errors.temperatura = 'Ingrese temperatura';
  }
  return errors;
};

export default ValidateSensor;
