interface Props {
  children: React.ReactElement[];
}

const drawerWidthSizePx: number = 240;
export const JournalLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <main className='flex flex-grow p-3'>{children}</main>
    </div>
  );
};
