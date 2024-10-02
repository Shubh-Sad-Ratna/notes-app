// src/components/NoteList.js
import React, { useContext, useState, useEffect } from 'react';
import { NotesContext } from '../NotesContext';
import Note from './Note';
import Search from './Search';
import NoteCount from './NoteCount';

const NoteList = () => {
  const { notes, loading, error } = useContext(NotesContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter(
          note =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, notes]);

  if (loading) {
    return <p>Loading notes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="note-list">
      <Search setSearchQuery={setSearchQuery} />
      <NoteCount total={notes.length} displayed={filteredNotes.length} />
      <div className="notes">
        {filteredNotes.length > 0 ? (
          filteredNotes.map(note => <Note key={note._id} note={note} />)
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
