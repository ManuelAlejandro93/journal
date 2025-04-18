import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '@/Store';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

export const useLoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const onEmailChange = (e: ChangeEvent): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent): void => {
    setPassword(e.target.value);
  };

  const onLoginFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    dispatch<any>(loginThunk());
  };

  return {
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onLoginFormSubmit
  };
};
