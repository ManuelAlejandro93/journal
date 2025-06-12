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
import { useMemo } from 'react';
export const SidebarSingleNoteItem = (note: Note) => {
  const dispatch = useDispatch();
  const formattedDate = useMemo(
    () => new Date(note.date as number).toUTCString().substring(0, 22),
    [note.date]
  );
  const formattedTitle = useMemo(() => {
    if (note.title?.length! > 17) {
      return `${note.title?.substring(0, 17)}...`;
    } else if (note.title?.length === 0) {
      return '** Nota sin titulo **';
    } else {
      return note.title;
    }
  }, [note.title]);
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
          <b>{formattedTitle}</b>
          <ListItemText className='text-gray-500'>{formattedDate}</ListItemText>
        </div>
      </ListItemButton>
    </ListItem>
  );
};
//
