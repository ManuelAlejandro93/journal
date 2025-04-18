export interface LogDataType {
  displayName: string | null;
  email: string | null;
  errorMessage: string | null;
  photoURL: string | null;
  status: 'checking' | 'non-authenticated' | 'authenticated';
  uuid: string | null;
}
