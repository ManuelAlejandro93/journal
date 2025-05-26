import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { Note } from '@/Interfaces';
import { setActiveNote } from '@/Store';
export const SidebarSingleNoteItem = (note: Note) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      key={note.noteId}
      sx={{ color: 'primary.main' }}
      onClick={() => dispatch(setActiveNote(note))}
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
