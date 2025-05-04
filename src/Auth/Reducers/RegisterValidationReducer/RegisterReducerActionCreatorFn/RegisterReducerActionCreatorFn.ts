import {
  RegularRegisterValidationReducerAction,
  RegularRegisterValidationProcessResults
} from '@/Interfaces';

export const registerValidationReducerActionCreatorFn = ({
  nameValidationResult,
  emailValidationResult,
  passwordValidationResult
}: RegularRegisterValidationProcessResults): RegularRegisterValidationReducerAction => {
  if (
    //? caso1:'invalid-name|invalid-email|invalid-password'
    !nameValidationResult &&
    !emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso1:'invalid-name|invalid-email|invalid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'invalid-name|invalid-email|invalid-password'
    };

    //! Start Caso2
  } else if (
    //? caso2:'invalid-name|invalid-email|valid-password'
    !nameValidationResult &&
    !emailValidationResult &&
    passwordValidationResult
  ) {
    //? caso2:'invalid-name|invalid-email|valid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'invalid-name|invalid-email|valid-password'
    };
  }
  //! End Caso2
  //! Start Caso3
  else if (
    //? caso3:'invalid-name|valid-email|invalid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso3:'invalid-name|valid-email|invalid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'invalid-name|valid-email|invalid-password'
    };
  }
  //! End Caso3
  //! Start Caso4
  else if (
    //? caso4:'valid-name|invalid-email|invalid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso4:'valid-name|invalid-email|invalid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'valid-name|invalid-email|invalid-password'
    };
  }
  //! End Caso4
  //! Start Caso5
  else if (
    //? caso5:'valid-name|valid-email|invalid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso5:'valid-name|valid-email|invalid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'valid-name|valid-email|invalid-password'
    };
  }
  //! End Caso5
  //! Start Caso6
  else if (
    //? caso6:'valid-name|valid-email|valid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso6:'valid-name|valid-email|valid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'valid-name|valid-email|valid-password'
    };
  }
  //! End Caso6
  //! Start Caso7
  else if (
    //? caso7:'valid-name|invalid-email|valid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso7:'valid-name|invalid-email|valid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'valid-name|invalid-email|valid-password'
    };
  }
  //! End Caso7
  //! Start Caso8
  else if (
    //? caso8:'invalid-name|valid-email|valid-password'
    !nameValidationResult &&
    emailValidationResult &&
    !passwordValidationResult
  ) {
    //? caso8:'invalid-name|valid-email|valid-password'
    return {
      payload: {
        emailValidationResult,
        nameValidationResult,
        passwordValidationResult
      },
      type: 'invalid-name|valid-email|valid-password'
    };
  }
  //! End Caso8
  //!Start caso 9, default y otros.
  return {
    payload: {
      emailValidationResult: false,
      nameValidationResult: false,
      passwordValidationResult: false
    },
    type: 'other cases'
  };
  //!End caso 9, default y otros.
};
