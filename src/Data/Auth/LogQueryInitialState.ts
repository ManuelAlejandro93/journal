import { LogQueryType } from '@/Interfaces';
import { logInitalState } from '@/Data';

export const logQueryInitialState: LogQueryType = {
  data: logInitalState,
  state: null,
  errorMessage: null
};
