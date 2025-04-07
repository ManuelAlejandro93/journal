import { Navbar } from '@/Journal';

interface Props {
  children: React.ReactElement[];
}

export const JournalLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <Navbar />
      <main className='flex flex-grow p-3'>{children}</main>
    </div>
  );
};
