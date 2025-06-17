// import { LogDataType } from '@/Interfaces';
import { LogDataType } from '../../Interfaces/Auth/LogDataType';

export const saveUserOnLS = (userData: LogDataType): void => {
  const stringUserData = JSON.stringify(userData);
  localStorage.setItem('userData', stringUserData);
};
