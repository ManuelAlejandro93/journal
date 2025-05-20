import { render } from '@testing-library/react';
import { ImageGallery } from '@/Journal';

describe('Pruebas en <ImageGallery/>', () => {
  test('Debe ser renderizable', () => {
    const { container } = render(<ImageGallery />);

    expect(container).toBeTruthy();
  });
});
