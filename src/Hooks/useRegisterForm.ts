import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailLoginThunk, googleLoginThunk } from '@/Store';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useRegisterForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const onNameChange = (e: ChangeEvent): void => {
    setName(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent): void => {
    setPassword(e.target.value);
  };

  const onRegularRegisterFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    dispatch<any>(emailLoginThunk());
  };

  const onGoogleRegisterFormSubmit = (e: ClickEvent): void => {
    e.preventDefault();
    dispatch<any>(googleLoginThunk());
  };

  return {
    name,
    onNameChange,
    email,
    onEmailChange,
    password,
    onPasswordChange
  };
};
