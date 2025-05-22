// import {
//   LoginValidationReducerAction,
//   RegularLoginValidationProcessResults
// } from '@/Interfaces';

import { LoginValidationReducerAction } from '../../../../Interfaces/Auth/Reducer/LoginValidationReducerAction';
import { RegularLoginValidationProcessResults } from '../../../../Interfaces/Auth/Reducer/RegularLoginValidationProcessResults';

export const LoginValidationReducerActionCreatorFn = ({
  emailValidationResult,
  passwordValidationResult
}: RegularLoginValidationProcessResults): LoginValidationReducerAction => {
  if (!emailValidationResult && !passwordValidationResult) {
    return {
      payload: {
        emailValidationResult,
        passwordValidationResult
      },
      type: 'invalid-email|invalid-password'
    };
  } else if (!emailValidationResult && passwordValidationResult) {
    return {
      payload: {
        emailValidationResult,
        passwordValidationResult
      },
      type: 'invalid-email|valid-password'
    };
  } else if (emailValidationResult && !passwordValidationResult) {
    return {
      payload: {
        emailValidationResult,
        passwordValidationResult
      },
      type: 'valid-email|invalid-password'
    };
  } else if (emailValidationResult && passwordValidationResult) {
    return {
      payload: {
        emailValidationResult,
        passwordValidationResult
      },
      type: 'valid-email|valid-password'
    };
  } else {
    return {
      payload: {
        emailValidationResult: false,
        passwordValidationResult: false
      },
      type: 'other cases'
    };
  }
};
