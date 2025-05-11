import { CircularProgress, Typography } from '@mui/material';
import { AuthLayout } from '@/Auth';

export const LSCheckingView = () => {
  return (
    <AuthLayout authPageName={``}>
      <div className='flex flex-col items-center'>
        <Typography fontSize={30}>
          Checking your credentials, plase wait.
        </Typography>
        <CircularProgress size={50}></CircularProgress>
      </div>
    </AuthLayout>
  );
};
