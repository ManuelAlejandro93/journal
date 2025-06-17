import { authSlice } from '../../../Store/Slices/Auth/AuthSlice';
describe('Pruebas en AuthSlice', () => {
  test('Debe llamarse "AuthState"', () => {
    authSlice.name;
    expect(666).toBe(667);
  });
});
