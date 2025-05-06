import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLoginThunk } from '@/Store';
import { formValidations } from '@/Helpers';
import {
  loginValidationReducer,
  LoginValidationReducerActionCreatorFn
} from '@/Auth';
import { loginValidationInitialState } from '@/Data';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useRegularLoginForm = () => {
  //Value controllers
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const { emailValidation, passwordValidation } = formValidations();

  const [loginValidationState, loginValidationReducerDispatch] = useReducer(
    loginValidationReducer,
    loginValidationInitialState
  );

  const onEmailChange = (e: ChangeEvent): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent): void => {
    setPassword(e.target.value);
  };

  const onRegularLoginFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();

    const emailValidationResult: boolean = emailValidation(email);
    const passwordValidationResult: boolean = passwordValidation(password);

    loginValidationReducerDispatch(
      LoginValidationReducerActionCreatorFn({
        emailValidationResult,
        passwordValidationResult
      })
    );
  };

  const onGoogleLoginFormSubmit = (e: ClickEvent): void => {
    e.preventDefault();
    dispatch<any>(googleLoginThunk());
  };

  return {
    //? Estados.
    email,
    password,
    //? Controllers.
    onEmailChange,
    onPasswordChange,
    onRegularLoginFormSubmit,
    onGoogleLoginFormSubmit,
    //? Validators
    loginValidationState
  };
};
