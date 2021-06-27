import './App.css';
import SideBar from './components/sidebar';
import { useState, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import Firebase from "firebase";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyC6agxTcM-9TWBAj3zGW69FtXNg8xmQRwA",
  authDomain: "notebook-71a84.firebaseapp.com",
  projectId: "notebook-71a84",
  storageBucket: "notebook-71a84.appspot.com",
  messagingSenderId: "880771990232",
  appId: "1:880771990232:web:f4d9c2a956a8dae7dc8dad",
  measurementId: "G-5DSGMDX0Y3"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
const databaseName = Firebase.database().ref('/notes');




const App = () => {
  let [currentNote, setCurrentNote] = useState({})
  let [noteData, setNoteData] = useState([]);

  const writeUserData = (typedContent) => {
    databaseName.push({
      content:typedContent.content
    })
    .once('value', snap => {

      setCurrentNote((oldState)=>({content:currentNote.content, id: snap.key}));
      // alert(JSON.stringify(snap.key))//here is the problem
      console.log(typedContent)

      //Add key to the state
    });
  }

  useEffect(()=>{
    const getNotes = async () =>{
      const response = await fetch('https://noteapp-2cd8c-default-rtdb.firebaseio.com/notes.json');
      const responseData = await response.json();
      

      const loadedNotes = [];

      // for(const key in responseData){
      //   loadedNotes.push({
      //     id:key,
      //     content: responseData[key].content,
      //     title: responseData[key].title

      //   })
      //   console.log("Key: ", responseData)
      // }
      // setNoteData(loadedNotes)
    }

    getNotes();

  }, [])
  useEffect(()=>{
    console.log("EFFECT")

    currentNote.content !== undefined ? writeUserData(currentNote) : console.log("Note Yet")


    // setCurrentNote((oldState)=>({...oldState, id: 0}));
  }, [currentNote.content])

  const saveNote = () =>{
    fetch('https://noteapp-2cd8c-default-rtdb.firebaseio.com/notes.json', {
      method: 'POST',
      body: JSON.stringify({
        content: currentNote,
        title: 'Test Title'
      })
    }).then((data)=>{
      console.log(data.key)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        REDdd
      </header>
      <div className="fl w-100 center">
        {/* <SideBar NoteContent={currentNote} noteList={noteData} setCurrentNote={setCurrentNote} /> */}
        <div id="note-section" className="fl center w-80 pa2">
          <input className="w-100" placeholder="Please start typing to save Note..." onChange={event=>{
            setCurrentNote({
              id:0,
              content: event.target.value
            })            
          }} />     
        </div>
      </div>
    </div>
  );
}

export default App;
