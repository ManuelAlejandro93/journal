import {
  RegularRegisterValidationReducerAction,
  RegularValidationDataState
} from '@/Interfaces';

import { RegularRegisterValidationInitialState } from '@/Data';

export const regularRegisterValidationReducer = (
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
    //? start case3 - 'invalid-name|valid-email|invalid-password'
    case 'invalid-name|valid-email|invalid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name must be longer o equal than 2 characters.',
        emailErrorMessage: 'Your email looks good',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    //? end case3
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case4 - 'valid-name|invalid-email|invalid-password'
    case 'valid-name|invalid-email|invalid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name looks good',
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    //? end case4
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case5 - 'valid-name|valid-email|invalid-password'
    case 'valid-name|valid-email|invalid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name looks good',
        emailErrorMessage: 'Your email looks good',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    //? end case5
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case6 - 'valid-name|valid-email|valid-password'
    case 'valid-name|valid-email|valid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name looks good',
        emailErrorMessage: 'Your email looks good',
        passwordErrorMessage: 'Your password looks good'
      };
    //? end case6
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case7 - 'valid-name|invalid-email|valid-password'
    case 'valid-name|invalid-email|valid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name looks good',
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password looks good'
      };
    //? end case7
    //? ------------------------------------------------------------
    //?------------------------------------------------------------
    //? start case8 - 'invalid-name|valid-email|valid-password'
    case 'invalid-name|valid-email|valid-password':
      return {
        hasNameError: !action.payload.nameValidationResult,
        hasEmailError: !action.payload.emailValidationResult,
        hasPasswordError: !action.payload.passwordValidationResult,
        nameErrorMessage: 'Your name must be longer o equal than 2 characters.',
        emailErrorMessage: 'Your emails looks good',
        passwordErrorMessage: 'Your password looks good'
      };
    //? end case8
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

//modificación generica.
