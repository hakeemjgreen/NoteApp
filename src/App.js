import './App.css';
import SideBar from './components/sidebar';
import { useState, useEffect } from 'react';

const App = () => {
  let [currentNote, setCurrentNote] = useState()
  let [noteData, setNoteData] = useState([]);

  useEffect(()=>{
    const getNotes = async () =>{
      const response = await fetch('https://noteapp-2cd8c-default-rtdb.firebaseio.com/notes.json');
      const responseData = await response.json();

      const loadedNotes = [];

      for(const key in responseData){
        loadedNotes.push({
          id:key,
          content: responseData[key].content,
          title: responseData[key].title

        })
      }
      setNoteData(loadedNotes)
    }

    getNotes();

  }, [])

  const saveNote = () =>{
    fetch('https://noteapp-2cd8c-default-rtdb.firebaseio.com/notes.json', {
      method: 'POST',
      body: JSON.stringify({
        content: currentNote,
        title: 'Test Title'
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        REDdd
      </header>
      <div className="fl w-100 center">
        <SideBar NoteContent={currentNote} noteList={noteData} setCurrentNote={setCurrentNote} />
        <div id="note-section" className="fl center w-80 pa2">
          <input className="w-100"  placeholder="Please start typing to save Note..." value={currentNote ? currentNote : ''} onChange={event=>{
            setCurrentNote(event.target.value)
            saveNote()
          }} />     
        </div>
      </div>
    </div>
  );
}

export default App;
