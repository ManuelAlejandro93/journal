//Probar después de las pruebas del store.

import { render, screen } from '@testing-library/react';
import { SideBar } from '../../../Journal/Components/SideBar';
import { StoreProvider } from '../../../Store/Provider/StoreProvider';

describe('Pruebas en <NothingSelectedView/>', () => {
  test('Debe ser renderizable', () => {
    screen;
    const { container } = render(
      <StoreProvider>
        <SideBar />
      </StoreProvider>
    );
    expect(container).toBeTruthy();
  });

  test('Debe ser igual al snapshot', () => {
    const { container } = render(
      <StoreProvider>
        <SideBar />
      </StoreProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
