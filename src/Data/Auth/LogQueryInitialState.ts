// import { LogQueryType } from '@/Interfaces';
import { LogQueryType } from '../../Interfaces/Auth/LogQueryType ';

// import { logInitalState } from '@/Data';
import { logInitalState } from '../../Data/Auth/LogInitialState';

export const logQueryInitialState: LogQueryType = {
  data: logInitalState,
  state: null,
  errorMessage: null
};
