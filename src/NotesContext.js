// src/NotesContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NotesContext = createContext();

const API_BASE_URL = 'https://crudcrud.com/api/ee84ed1087b44a418534889b6a79eae2'; // Replace with your CrudCrud endpoint

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch notes from CrudCrud on initial load
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/notes`);
        setNotes(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching notes:', err);
        setError('Failed to fetch notes.');
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async (title, description) => {
    const newNote = { title, description };
    try {
      const response = await axios.post(`${API_BASE_URL}/notes`, newNote);
      setNotes([...notes, response.data]);
    } catch (err) {
      console.error('Error adding note:', err);
      setError('Failed to add note.');
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error('Error deleting note:', err);
      setError('Failed to delete note.');
    }
  };

  // Optional: Update a note
  const updateNote = async (id, updatedNote) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/notes/${id}`, updatedNote);
      setNotes(notes.map(note => (note._id === id ? response.data : note)));
    } catch (err) {
      console.error('Error updating note:', err);
      setError('Failed to update note.');
    }
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, updateNote, loading, error }}>
      {children}
    </NotesContext.Provider>
  );
};
