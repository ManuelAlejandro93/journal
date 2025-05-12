import { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLoginAndRegisterThunk, regularLoginThunk } from '@/Store';
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

  const { isFormValid } = loginValidationState;

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
    dispatch<any>(googleLoginAndRegisterThunk());
  };

  useEffect(() => {
    if (isFormValid) {
      const userDataForFireBase: {
        email: string;
        password: string;
      } = {
        email,
        password
      };

      //enviar a firebase esta información.
      dispatch<any>(regularLoginThunk(userDataForFireBase));
    }
  }, [isFormValid]);

  return {
    //? Estados.
    email,
    password,
    isFormValid,
    //? Controllers.
    onEmailChange,
    onPasswordChange,
    onRegularLoginFormSubmit,
    onGoogleLoginFormSubmit,
    //? Validators
    loginValidationState
  };
};
