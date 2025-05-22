import { logInitalState } from '../../Data/Auth/LogInitialState';
describe('Pruebas en LoginValidationInitialState', () => {
  test('debe ser del tipo que se definió en la interfaz', () => {
    expect(logInitalState).toStrictEqual({
      displayName: null,
      email: null,
      errorMessage: null,
      photoURL: null,
      dataStatus: 'local-storage-checking',
      uuid: null
    });
  });
  test('debe tener la opcion dataStatus === "local-storage-checking"', () => {
    expect(logInitalState.dataStatus).toBe('local-storage-checking');
  });
});
