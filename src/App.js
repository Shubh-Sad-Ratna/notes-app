// src/App.js
import React from 'react';
import { NotesProvider } from './NotesContext';
import AddNote from './Components/AddNote';
import NoteList from './Components/NoteList';
import './App.css';

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <h1>NoteBook</h1>
        <AddNote />
        <NoteList />
      </div>
    </NotesProvider>
  );
}

export default App;
