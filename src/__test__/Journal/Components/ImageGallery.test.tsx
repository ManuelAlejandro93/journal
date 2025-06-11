// import { render, screen } from '@testing-library/react';
// import { ImageGallery } from '../../../Journal/Components/ImageGallery';

// describe('Pruebas en <ImageGallery/>', () => {
//   test('Debe ser renderizable', () => {
//     screen;
//     const { container } = render(<ImageGallery />);
//     expect(container).toBeTruthy();
//   });
//   test('Debe ser igual al snapshot', () => {
//     const { container } = render(<ImageGallery />);
//     expect(container).toMatchSnapshot();
//   });
//   test('Debe existir un elemento img que contenga los siguientes atributos alt="bike" y src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6"', () => {
//     const {} = render(<ImageGallery />);
//     const bikeImg = screen.getByAltText(/bike/i);

//     expect(
//       bikeImg
//         .getAttribute('src')
//         ?.includes(
//           'https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
//         )
//     ).toBeTruthy();

//     expect(bikeImg.getAttribute('alt')).toBe('Bike');
//   });
// });
