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
      sx={{ color: 'primary.main' }}
      onClick={() => dispatch(setActiveNote(note))}
    >
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <div>
          <b>{note.title}</b>
          <ListItemText>{note.title}</ListItemText>
          <ListItemText>{note.title}</ListItemText>
        </div>
      </ListItemButton>
    </ListItem>
  );
};
