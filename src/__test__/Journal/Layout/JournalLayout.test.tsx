import { render, screen } from '@testing-library/react';
import { JournalLayout } from '../../../Journal/Layout/JournalLayout';

describe('Pruebas en <JournalLayout/>', () => {
  test('Debe ser renderizable', () => {
    screen;
    const { container } = render(
      <JournalLayout>
        <></>
      </JournalLayout>
    );
    expect(container).toBeTruthy();
  });

  test('Debe ser igual al snapshot', () => {
    const { container } = render(
      <JournalLayout>
        <></>
      </JournalLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
