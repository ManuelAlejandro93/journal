interface LoginValidationReducerAction {
  payload: {
    emailValidationResult: boolean;
    passwordValidationResult: boolean;
  };
  type:
    | 'invalid-email|invalid-password'
    | 'invalid-email|valid-password'
    | 'valid-email|invalid-password'
    | 'valid-email|valid-password'
    | 'other cases';
}

interface regularLoginValidationResults {
  emailValidationResult: boolean;
  passwordValidationResult: boolean;
}

export const LoginValidationReducerActionCreatorFn = ({
  emailValidationResult,
  passwordValidationResult
}: regularLoginValidationResults): LoginValidationReducerAction => {
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
