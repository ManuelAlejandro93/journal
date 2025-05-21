import { render, screen } from '@testing-library/react';
import { LSCheckingView } from '../../UI/LSCheckingView';

describe('Pruebas en <LSCheckingView/>', () => {
  test('Debe ser renderizable', () => {
    screen;
    const { container } = render(<LSCheckingView />);
    expect(container).toBeTruthy();
  });

  test('Debe ser igual al snapshot', () => {
    const { container } = render(<LSCheckingView />);
    expect(container).toMatchSnapshot();
  });

  test('El texto "Checking your credentials, plase wait." debe ser visible en el documento', () => {
    const {} = render(<LSCheckingView />);
    const elementoConTexto = screen.getByText(
      /Checking your credentials, plase wait./i
    );

    expect(elementoConTexto).toBeVisible();
  });
});
