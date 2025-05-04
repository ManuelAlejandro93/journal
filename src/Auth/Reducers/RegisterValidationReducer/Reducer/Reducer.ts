import {
  RegularRegisterValidationReducerAction,
  RegularValidationDataState
} from '@/Interfaces';

import { RegularRegisterValidationInitialState } from '@/Data';

export const RegularRegisterValidationReducer = (
  state: RegularValidationDataState = RegularRegisterValidationInitialState,
  action: RegularRegisterValidationReducerAction
): RegularValidationDataState => {
  switch (action.type) {
    //?------------------------------------------------------------
    //? start case1 - 'invalid-name|invalid-email|invalid-password'
    case 'invalid-name|invalid-email|invalid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name must be longer o equal than 2 characters.',
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    //? end case1
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case2 - 'invalid-name|invalid-email|valid-password'
    case 'invalid-name|invalid-email|valid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name must be longer o equal than 2 characters.',
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password looks good'
      };
    //? end case2
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case2 - 'invalid-name|invalid-email|valid-password'
    case 'invalid-name|invalid-email|valid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name must be longer o equal than 2 characters.',
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password looks good'
      };
    //? end case2
    //? ------------------------------------------------------------
    default:
      return { ...state };
  }
};

//!Documentación:

//? hasEmailError: !action.payload.emailValidationResult,
//el validador dice si la cadena email o contraseña son adecuadas.
//lo cual es lo contrario a tener error en la expresión evaluada.
//por lo que uno es el contrario del otro.

//Ejemplo: si una cadena de correo es correcta entonces no tienne errores.
