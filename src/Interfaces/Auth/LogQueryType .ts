// import { LogDataType } from '@/Interfaces';
import { LogDataType } from '../../Interfaces/Auth/LogDataType';

export interface LogQueryType {
  data: LogDataType | null;
  state: 'fulfilled' | 'rejected' | 'pending' | null;
  errorMessage: string | null | undefined;
}
