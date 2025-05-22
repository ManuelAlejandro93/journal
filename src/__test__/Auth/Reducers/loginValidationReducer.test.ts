import { loginValidationReducer } from '../../../Auth/Reducers/LoginValidationReducer/LoginValidationReducer';
import { LoginValidationReducerActionCreatorFn } from '../../../Auth/Reducers/LoginValidationReducer/actionCreatorFn/actionCreatorFn';
import { loginValidationInitialState } from '../../../Data/Auth/RegularLogin/RegularLoginInitialData';

describe('pruebas en el reducer del login', () => {
  test('debe admitir el estado inicial y el resultado de su actioncreatorfn', () => {
    const result = loginValidationReducer(
      loginValidationInitialState,
      LoginValidationReducerActionCreatorFn({
        emailValidationResult: true,
        passwordValidationResult: true
      })
    );
    expect(result).toBeTruthy();
  });
  test('al introducir emailValidationResult = true y passwordValidationResult = true. Result.hasEmailError = false y Result.hasPasswordError = false', () => {
    const result = loginValidationReducer(
      loginValidationInitialState,
      LoginValidationReducerActionCreatorFn({
        emailValidationResult: true,
        passwordValidationResult: true
      })
    );
    expect(result.hasEmailError).toBe(false);
    expect(result.hasPasswordError).toBe(false);
    expect(result.emailErrorMessage).toBe('Your email looks good');
    expect(result.passwordErrorMessage).toBe('Your password looks good');
    expect(result.isFormValid).toBe(true);
  });
  test('al introducir emailValidationResult = false. Result.isFormValid = false', () => {
    const result = loginValidationReducer(
      loginValidationInitialState,
      LoginValidationReducerActionCreatorFn({
        emailValidationResult: false,
        passwordValidationResult: true
      })
    );
    expect(result.isFormValid).toBe(false);
  });
  test('al introducir nameValidationResult = false. Result.isFormValid = false', () => {
    const result = loginValidationReducer(
      loginValidationInitialState,
      LoginValidationReducerActionCreatorFn({
        emailValidationResult: true,
        passwordValidationResult: false
      })
    );
    expect(result.isFormValid).toBe(false);
  });
});
