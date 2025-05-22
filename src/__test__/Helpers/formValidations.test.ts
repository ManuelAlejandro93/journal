import { formValidations } from '../../Helpers/Validations/formValidations';

const { passwordValidation, nameValidation, emailValidation } =
  formValidations();

describe('Testing on formValidations fn', () => {
  test('namevalidation debe devolver falso si se ingresa un nombre con  1 letra', () => {
    const result = nameValidation('q');

    expect(result).toBe(false);
  });
  test('namevalidation debe devolver verdadero si se ingresa un nombre con 2 letra', () => {
    const result = nameValidation('qq');

    expect(result).toBe(true);
  });
  test('namevalidation debe devolver verdadero si se ingresa un nombre con 10 letra', () => {
    const result = nameValidation('qqqqqqqqqq');

    expect(result).toBe(true);
  });
  test('password validation debe devolver verdadero si se ingresa un string con 8 caracteres', () => {
    const result = passwordValidation('qqqqqqqq');

    expect(result).toBe(true);
  });
  test('password validation debe devolver false si se ingresa un string con 7 caracteres', () => {
    const result = passwordValidation('qqqqqqq');

    expect(result).toBe(false);
  });
  test('emailValidation debe devolver true si se ingresa "abc@domain.ar"', () => {
    const result = emailValidation('abc@domain.ar');

    expect(result).toBe(true);
  });
  test('emailValidation debe devolver false si se ingresa "user@123.com"', () => {
    const result = emailValidation('user@123.com');

    expect(result).toBe(false);
  });
});
