import { render } from '@testing-library/react';
import { AppTheme } from '@/Theme';

describe('Prueba sobre <AppTheme>', () => {
  test('Debe ser renderizable', () => {
    const { container } = render(
      <AppTheme>
        <></>
      </AppTheme>
    );
    expect(container).toBeTruthy();
  });
  test('Debe poder tener un snapshot', () => {
    const { container } = render(
      <AppTheme>
        <h1>Soy un titulo generico.</h1>
      </AppTheme>
    );

    expect(container).toMatchSnapshot();
  });
});
