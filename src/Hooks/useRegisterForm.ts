import { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { googleLoginThunk } from '@/Store';
import { formValidations } from '@/Helpers';
import {
  registerValidationReducerActionCreatorFn,
  regularRegisterValidationReducer
} from '@/Auth';
import { RegularRegisterValidationInitialState } from '@/Data';

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type SubmitEvent = React.FormEvent<HTMLFormElement>;

type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;

export const useRegisterForm = () => {
  //Value controllers
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  //register validation state
  const [
    regularRegisterValidationState,
    regularRegisterValidationReducerDispatch
  ] = useReducer(
    regularRegisterValidationReducer,
    RegularRegisterValidationInitialState
  );

  // isFormValid desestructurado desde regularRegisterValidationState

  const { isFormValid } = regularRegisterValidationState;

  //on Value change event controllers
  const onNameChange = (e: ChangeEvent): void => {
    setName(e.target.value);
  };

  const onEmailChange = (e: ChangeEvent): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: ChangeEvent): void => {
    setPassword(e.target.value);
  };

  //validation import

  const { emailValidation, passwordValidation, nameValidation } =
    formValidations();

  //onsubmit controllers

  const onRegularRegisterFormSubmit = (e: SubmitEvent): void => {
    e.preventDefault();
    const nameValidationResult: boolean = nameValidation(name);

    const emailValidationResult: boolean = emailValidation(email);
    const passwordValidationResult: boolean = passwordValidation(password);

    regularRegisterValidationReducerDispatch(
      registerValidationReducerActionCreatorFn({
        nameValidationResult,
        emailValidationResult,
        passwordValidationResult
      })
    );
  };

  const onGoogleRegisterFormSubmit = (e: ClickEvent): void => {
    e.preventDefault();
    dispatch<any>(googleLoginThunk());
  };

  useEffect(() => {
    if (isFormValid) {
      const userDataForFireBase: {
        name: string;
        email: string;
        password: string;
      } = {
        name,
        email,
        password
      };
    }
  }, [isFormValid]);

  return {
    name,
    onNameChange,
    email,
    onEmailChange,
    password,
    onPasswordChange,
    onGoogleRegisterFormSubmit,
    onRegularRegisterFormSubmit,
    regularRegisterValidationState
  };
};
