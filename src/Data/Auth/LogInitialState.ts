import { LogDataType } from '@/Interfaces';

export const logInitalState: LogDataType = {
  displayName: null,
  email: null,
  errorMessage: null,
  photoURL: null,
  // dataStatus: 'authenticated',
  // dataStatus: 'non-authenticated',
  // dataStatus: 'checking',
  dataStatus: 'local-storage-checking',
  uuid: null
};
