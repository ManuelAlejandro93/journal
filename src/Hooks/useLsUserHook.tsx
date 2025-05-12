import { useDispatch } from 'react-redux';
import { onUserExistsOnLS, onUserNotExistsOnLS } from '@/Store';
import { useEffect } from 'react';
import { LogDataType } from '@/Interfaces';

export const useLsUserHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userOnLS: string | null = localStorage.getItem('userData');

    if (userOnLS !== null) {
      const parsedUser: LogDataType = JSON.parse(userOnLS);
      dispatch(onUserExistsOnLS(parsedUser));
    } else {
      dispatch(onUserNotExistsOnLS());
    }
  }, []);
};
