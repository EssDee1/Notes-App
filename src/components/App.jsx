import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(note) {
    setNoteArray((prevValue) => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNoteArray((prevValue) => {
      return prevValue.filter((thisNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteArray.map((eachNote, index) => (
        <Note
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
