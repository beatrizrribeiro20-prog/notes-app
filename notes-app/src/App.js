import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  function addNote() {
    if (newNote !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  }

  function deleteNote(index) {
    const updatedNotes = notes.filter((note, i) => i !== index);
    setNotes(updatedNotes);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Notes App</h1>

      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />

      <button onClick={addNote}>Add Note</button>

      <h3>Total Notes: {notes.length}</h3>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}> ❌ </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
