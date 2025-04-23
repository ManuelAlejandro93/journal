import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailLoginThunk, googleLoginThunk } from '@/Store';
import { formValidations } from '@/Data';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useLoginForm = () => {
  //Value controllers
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  //validations controllers
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

  const { emailValidation } = formValidations();

  const onEmailChange = (e: ChangeEvent): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent): void => {
    setPassword(e.target.value);
  };

  const onLoginFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();

    if (emailValidation(email)) {
      setEmailError(false);
      setEmailErrorMessage('correo válido');
    } else {
      setEmailError(true);
      setEmailErrorMessage('te falta un símbolo "@"');
    }
    // dispatch<any>(emailLoginThunk());
  };

  const onGoogleLoginFormSubmit = (e: ClickEvent): void => {
    e.preventDefault();
    dispatch<any>(googleLoginThunk());
  };

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onLoginFormSubmit,
    onGoogleLoginFormSubmit,
    emailError,
    emailErrorMessage
  };
};
