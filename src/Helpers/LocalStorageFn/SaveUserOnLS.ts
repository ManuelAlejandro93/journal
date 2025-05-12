import { LogDataType } from '@/Interfaces';

export const saveUserOnLS = (userData: LogDataType): void => {
  const stringUserData = JSON.stringify(userData);
  localStorage.setItem('userData', stringUserData);
};
