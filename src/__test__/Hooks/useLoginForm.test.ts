import { renderHook } from '@testing-library/react';
import { useRegularLoginForm } from '../../Hooks/useLoginForm';

describe('pruebas en el hook useRegularLoginForm', () => {
  test('debe ser utilizable', () => {
    const {} = renderHook(() => useRegularLoginForm());
    expect(666).toBe(666);
  });
});
