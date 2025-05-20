import { render, screen } from '@testing-library/react';
import { NoteView } from '../../../Journal/Views/NoteView';

describe('Pruebas en <NoteView/>', () => {
  test('Debe ser renderizable', () => {
    screen;
    const { container } = render(<NoteView />);
    expect(container).toBeTruthy();
  });

  test('Debe ser igual al snapshot', () => {
    const { container } = render(<NoteView />);
    expect(container).toMatchSnapshot();
  });

  test('El texto "28 de agosto de 2023" debe ser visible en el documento', () => {
    const {} = render(<NoteView />);
    const elementoConTexto = screen.getByText(/28 de agosto de 2023/i);

    expect(elementoConTexto).toBeVisible();
  });
  test('El texto "Guardar" debe ser visible en el documento y debe ser un elemento "button"', () => {
    const {} = render(<NoteView />);
    const elementoConTexto = screen.getByText(/guardar/i);

    expect(elementoConTexto.tagName.toLowerCase()).toBe('button');
  });
});
