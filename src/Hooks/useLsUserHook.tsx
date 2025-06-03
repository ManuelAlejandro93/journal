import { useDispatch } from 'react-redux';
import {
  getAllNotesThunk,
  onUserExistsOnLS,
  onUserNotExistsOnLS
} from '@/Store';
import { useEffect } from 'react';
import { LogDataType } from '@/Interfaces';

export const useLsUserHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userOnLS: string | null = localStorage.getItem('userData');

    if (typeof userOnLS === 'string') {
      const parsedUser: LogDataType = JSON.parse(userOnLS);
      dispatch(onUserExistsOnLS(parsedUser));
      console.log(parsedUser.uuid);

      dispatch<any>(getAllNotesThunk(parsedUser.uuid as string));
    } else {
      dispatch(onUserNotExistsOnLS());
    }
  }, []);
};
