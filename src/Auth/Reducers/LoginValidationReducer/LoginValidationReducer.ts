interface LoginValidationState {
  hasEmailError: boolean;
  emailErrorMessage: string;
  hasPasswordError: boolean;
  passwordErrorMessage: string;
}

const initialState: LoginValidationState = {
  hasEmailError: false,
  emailErrorMessage: '',
  hasPasswordError: false,
  passwordErrorMessage: ''
};

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

export const loginValidationReducer = (
  state: LoginValidationState = initialState,
  action: LoginValidationReducerAction
): LoginValidationState => {
  switch (action.type) {
    case 'invalid-email|invalid-password':
      return {
        hasEmailError: action.payload.emailValidationResult,
        hasPasswordError: action.payload.passwordValidationResult,
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    case 'invalid-email|valid-password':
      return {
        hasEmailError: action.payload.emailValidationResult,
        hasPasswordError: action.payload.passwordValidationResult,
        emailErrorMessage:
          'Check your email. It must look like this "usuario123@server.com"',
        passwordErrorMessage: 'Good password. It is strong.'
      };
    case 'valid-email|invalid-password':
      return {
        hasEmailError: action.payload.emailValidationResult,
        hasPasswordError: action.payload.passwordValidationResult,
        emailErrorMessage: 'Your email looks good, check your password',
        passwordErrorMessage: 'Your password must have at least 8 characters'
      };
    case 'valid-email|valid-password':
      return {
        hasEmailError: action.payload.emailValidationResult,
        hasPasswordError: action.payload.passwordValidationResult,
        emailErrorMessage: 'Your email looks good',
        passwordErrorMessage: 'Your password looks good'
      };
    default:
      return { ...state };
  }
};
