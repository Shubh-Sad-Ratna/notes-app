// src/components/Note.js
import React, { useContext } from 'react';
import { NotesContext } from '../NotesContext';

const Note = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => deleteNote(note._id)}>Delete</button>
    </div>
  );
};

export default Note;

