import {
  LoginValidationReducerAction,
  RegularLoginValidationProcessResults
} from '@/Interfaces';

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
