export interface RegularRegisterValidationReducerAction {
  payload: {
    emailValidationResult: boolean;
    passwordValidationResult: boolean;
    nameValidationResult: boolean;
  };
  type: /* caso1 */
  | 'invalid-name|invalid-email|invalid-password'
    /* caso2 */
    | 'invalid-name|invalid-email|valid-password'
    /* caso3 */
    | 'invalid-name|valid-email|invalid-password'
    /* caso4 */
    | 'valid-name|invalid-email|invalid-password'
    /* caso5 */
    | 'valid-name|valid-email|invalid-password'
    /* caso6 */
    | 'valid-name|valid-email|valid-password'
    /* caso7 */
    | 'valid-name|invalid-email|valid-password'
    /* caso8 */
    | 'invalid-name|valid-email|valid-password'
    /* caso9 */
    | 'other cases';
}
