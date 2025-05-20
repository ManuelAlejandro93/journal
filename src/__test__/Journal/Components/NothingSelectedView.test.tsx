import { render, screen } from '@testing-library/react';
import { NothingSelectedView } from '../../../Journal/Views/NothingSelectedView';

describe('Pruebas en <NothingSelectedView/>', () => {
  test('Debe ser renderizable', () => {
    screen;
    const { container } = render(<NothingSelectedView />);
    expect(container).toBeTruthy();
  });

  test('Debe ser igual al snapshot', () => {
    const { container } = render(<NothingSelectedView />);
    expect(container).toMatchSnapshot();
  });

  test('El texto "Crear una nueva nota" debe ser visible en el documento', () => {
    const {} = render(<NothingSelectedView />);
    const elementoConTexto = screen.getByText(/Crear una nueva nota/i);

    expect(elementoConTexto).toBeVisible();
  });
});
