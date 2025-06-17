import { LogDataType } from '@/Interfaces';

export const mockNotAuthenticatedAuthState: LogDataType = {
  displayName: 'Demo-Name Demo-LastName',
  email: 'DemoEmail@DemoCompany.com',
  errorMessage: null,
  photoURL: 'http://www.demoPhotoURL.com',
  //Lo importate es esto:
  dataStatus: 'non-authenticated',
  //Mirar arriba.
  uuid: `demoUUID:123`
};
