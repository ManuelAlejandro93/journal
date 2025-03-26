import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '@/Router';
import { render, screen } from '@testing-library/react';

describe('Pruebas en AppRouter', () => {
  test('debe renderizarse.', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouter />
      </MemoryRouter>
    );
    screen;
    expect(container).toBeTruthy();
  });

  //! Pruebas en Journal Router

  test('al pasarle el path inicial "/" debe llevar a la página "JournalPage"', () => {
    const initialPath = '/';
    const {} = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('JournalPage')).toBeVisible();
  });
  test('al pasarle el path inicial "/cualquiercosa" debe llevar a la página "JournalPage"', () => {
    const initialPath = '/cualquiercosa';
    const {} = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('JournalPage')).toBeVisible();
  });

  //! Pruebas en Auth Router
  test('al pasarle el path inicial "/auth" debe llevar a la página "LoginPage"', () => {
    const initialPath = '/auth';
    const {} = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeVisible();
  });
  test('al pasarle el path inicial "/auth/cualquiercosa" debe llevar a la página "LoginPage"', () => {
    const initialPath = '/auth/cualquiercosa';
    const {} = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('LoginPage')).toBeVisible();
  });
  test('al pasarle el path inicial "/auth/register" debe llevar a la página "RegisterPage"', () => {
    const initialPath = '/auth/register';
    const {} = render(
      <MemoryRouter initialEntries={[initialPath]}>
        <AppRouter />
      </MemoryRouter>
    );
    expect(screen.getByText('RegisterPage')).toBeVisible();
  });
});
