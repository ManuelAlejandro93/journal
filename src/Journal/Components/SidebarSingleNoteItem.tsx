import { TurnedInNot } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { Note } from '@/Interfaces';
export const SidebarSingleNoteItem = (note: Note) => {
  return (
    <ListItem
      key={note.noteId}
      sx={{ color: 'primary.main' }}
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <div>
          <b>{note.date}</b>
          <ListItemText>{note.date}</ListItemText>
          <ListItemText>{note.date}</ListItemText>
        </div>
      </ListItemButton>
    </ListItem>
  );
};
