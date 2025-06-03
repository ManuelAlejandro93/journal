import { Navbar, SideBar } from '@/Journal';

interface Props {
  children: React.ReactElement[] | React.ReactElement;
}

export const JournalLayout = ({ children }: Props) => {
  return (
    <div className='flex animate-jump-in animate-duration-500'>
      <SideBar />
      <Navbar />
      <main className='p-4 mt-20 w-3/4'>{children}</main>
    </div>
  );
};
