export interface LoginValidationReducerAction {
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
