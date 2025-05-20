import { Navbar, SideBar } from '@/Journal';
// import { Toolbar } from '@mui/material';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const JournalLayout = ({ children }: Props) => {
  return (
    <div className='flex animate-jump-in animate-duration-500'>
      <SideBar />
      <Navbar />
      <main className='p-4 mt-20'>{children}</main>
    </div>
  );
};
