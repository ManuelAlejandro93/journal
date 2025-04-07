import { Button } from '@mui/material';
import { JournalLayout } from '@/Journal';

export const JournalPage = () => {
  return (
    <JournalLayout>
      <h1>Journal Page </h1>
      <Button variant='contained'>click me</Button>
      <Button variant='contained'>click me</Button>
      <Button variant='contained'>click me</Button>
      <Button variant='contained'>click me</Button>
      <Button variant='contained'>click me</Button>
    </JournalLayout>
  );
};
