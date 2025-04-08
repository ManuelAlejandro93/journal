import { Navbar, SideBar } from '@/Journal';
import { Toolbar } from '@mui/material';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const JournalLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <SideBar />
      <Navbar />
      <main className='flex flex-grow p-4 mt-20'>{children}</main>
    </div>
  );
};
