export interface LogDataType {
  displayName: string | null;
  email: string | null;
  errorMessage: string | null;
  photoURL: string | null;
  dataStatus:
    | 'checking'
    | 'non-authenticated'
    | 'authenticated'
    | 'local-storage-checking';
  uuid: string | null;
}
