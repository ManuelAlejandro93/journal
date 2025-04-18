import { LogDataType } from '@/Interfaces';

export interface LogQueryType {
  data: LogDataType | null;
  state: 'fulfilled' | 'rejected' | 'pending' | null;
  errorMessage: 'firebase-error-message.' | null;
}
