import { LoginValidationReducerActionCreatorFn } from '../../../Auth/Reducers/LoginValidationReducer/actionCreatorFn/actionCreatorFn';

describe('pruebas sobre "LoginValidationReducerActionCreatorFn"', () => {
  test('debe devolver un objeto con la interfaz definida en su salida.', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: true,
      passwordValidationResult: false
    });

    expect(result).toStrictEqual({
      payload: {
        emailValidationResult: expect.any(Boolean),
        passwordValidationResult: expect.any(Boolean)
      },
      type: expect.any(String)
    });
  });
  test('con emailValidation = false y passwordValidation = false. result.type = "invalid-email|invalid-password"', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: false,
      passwordValidationResult: false
    });

    expect(result.type).toBe('invalid-email|invalid-password');
  });
  test('con emailValidation = false y passwordValidation = true. result.type = "invalid-email|valid-password"', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: false,
      passwordValidationResult: true
    });
    expect(result.type).toBe('invalid-email|valid-password');
  });
  test('con emailValidation = true y passwordValidation = false. result.type = "invalid-email|valid-password"', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: true,
      passwordValidationResult: false
    });
    expect(result.type).toBe('valid-email|invalid-password');
  });
  test('con emailValidation = true y passwordValidation = true. result.type = "valid-email|valid-password"', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: true,
      passwordValidationResult: true
    });
    expect(result.type).toBe('valid-email|valid-password');
  });
  test('con emailValidation = "stringdeprueba" y passwordValidation = "stringdeprueba". result.type = "valid-email|valid-password"', () => {
    const result = LoginValidationReducerActionCreatorFn({
      emailValidationResult: false,
      passwordValidationResult: true
    });
    expect(result.type).not.toBe('other cases');
  });
});
