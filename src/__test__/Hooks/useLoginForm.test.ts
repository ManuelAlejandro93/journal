import { renderHook } from '@testing-library/react';
import { useRegularLoginForm } from '../../Hooks/useLoginForm';

describe('pruebas en el hook useRegularLoginForm', () => {
  test('debe ser utiilizable', () => {
    const {} = renderHook(() => useRegularLoginForm());
  });
});
