// src/components/AddNote.js
import React, { useState, useContext } from 'react';
import { NotesContext } from '../NotesContext';

const AddNote = () => {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      addNote(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-note">
      <h2>Add New Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Note Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button onClick={handleAdd}>Add New Note</button>
    </div>
  );
};

export default AddNote;
