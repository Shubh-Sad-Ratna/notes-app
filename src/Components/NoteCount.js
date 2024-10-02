// src/components/NoteCount.js
import React from 'react';

const NoteCount = ({ total, displayed }) => {
  return (
    <div className="note-count">
      <p>Total Notes: {total}</p>
      <p>Displayed Notes: {displayed}</p>
    </div>
  );
};

export default NoteCount;
