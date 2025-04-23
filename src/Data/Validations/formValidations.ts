//cambio generico.

export const formValidations = () => {
  const emailValidation = (email: string): boolean => {
    if (email.match(/@/g)) {
      return true;
    } else {
      return false;
    }
  };
  const nameValidation = (name: string): string => {
    if (name.length >= 2) {
      return 'Has ingresado un nombre correcto.';
    } else {
      return 'Tu nombre debe tener 2 o más letras.';
    }
  };
  const passwordValidation = (password: string): string => {
    if (password.length >= 8) {
      return 'tu contraseña es fuerte';
    } else {
      return 'Tu contraseña debe tener 8 o más caracteres.';
    }
  };
  return { emailValidation, nameValidation, passwordValidation };
};
