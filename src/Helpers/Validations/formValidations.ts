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

type FormValidations = () => {
  emailValidation: (email: string) => boolean;
  nameValidation: (name: string) => boolean;
  passwordValidation: (password: string) => boolean;
};

export const formValidations: FormValidations = () => {
  const emailValidation = (email: string): boolean => {
    if (email.match(emailRegex)) {
      return true;
    } else {
      return false;
    }
  };
  const nameValidation = (name: string): boolean => {
    if (name.length >= 2) {
      return true;
    } else {
      return false;
    }
  };
  const passwordValidation = (password: string): boolean => {
    if (password.length >= 8) {
      return true;
    } else {
      return false;
    }
  };
  return { emailValidation, nameValidation, passwordValidation };
};
