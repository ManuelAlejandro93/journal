//cambio generico.

/**
 * Expresión regular para validar un formato de correo electrónico con las siguientes reglas:
 * - Antes de la '@':
 *   - El primer carácter debe ser una letra (mayúscula o minúscula).
 *   - Los caracteres siguientes pueden ser letras o números (cero o más).
 * - Debe contener exactamente una '@'.
 * - Después de la '@':
 *   - Solo se permiten letras (mayúsculas o minúsculas), al menos una.
 * - Debe terminar con un punto seguido de una extensión:
 *   - La extensión debe tener al menos 2 caracteres, solo letras (ejemplo: 'com', 'ar', 'net').
 *
 * Ejemplos válidos: 'usuario123@server.com', 'abc@domain.ar'
 * Ejemplos inválidos: '1usuario@server.com' (empieza con número), 'user@123.com' (números después de '@'),
 *'user@.com' (sin letras después de '@'), 'usuario@@mail.com' (más de una '@')
 */
const emailRegex = /^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

export const formValidations = () => {
  const emailValidation = (email: string): boolean => {
    if (email.match(emailRegex)) {
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
