//# Add state update when new note is created
import './App.css';
import SideBar from './components/sidebar';
import { useState, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import Firebase from "firebase";

const loadedNotes = {};
let newList;

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
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}else {
  Firebase.app(); // if already initialized, use that one
}

const databaseName = Firebase.database().ref('/notes');




const App = () => {
  let [currentNote, setCurrentNote] = useState({})
  let [noteState, setNoteState] = useState({})
  let [noteListState, setNoteList] = useState({})
  let [noteData, setNoteData] = useState({});

  const writeUserData = (typedContent) => {

    //If note exists update it
    if(noteState.id === undefined){
      databaseName.push({
        content:typedContent
      })
      .once('value', snap => {
  
        // setCurrentNote((oldState)=>({content:currentNote.content, id: 3}));
        setNoteState({id:snap.key, content: typedContent})  
        // alert(JSON.stringify(snap.key))//here is the problem
        console.log("noteeee",noteState)
  
        //Add key to the state
      });
    }

    //If not create it
    else{
      const userNoteDB = Firebase.database().ref(`/notes/${noteState.id}`);

      userNoteDB.set({
        content:typedContent
      })
      .then('value', snap => {
  
        // setCurrentNote((oldState)=>({content:currentNote.content, id: 3}));
        setNoteState({id:snap.key,content: typedContent})  
        // alert(JSON.stringify(snap.key))//here is the problem
        console.log("noteeeedddd",noteState)
  
        //Add key to the state
      });
    }
    
  }

  useEffect(()=>{

      var noteRef = Firebase.database().ref('notes/');

      //Only runs every note creation. DOES NOT UPDATE STATE AFTER KEY PRESS
      noteRef.orderByChild("timestamp").on('value', (snapshot) => {
        const data = snapshot.val();
        for(const key in data){
          let content = data[key].content
                      
            let notess={
              [key] : {
                content,
                "timestamp": new Date().getTime()
              }
            }
            newList = {
              ...newList,
              ...notess
            }
            console.log("NOTESSS", newList)
          
        }
        setNoteData(newList)
        // console.log("GET EFFECT", newList)
      });

      
      // firebase.database().ref('users/' + userId).set({
      //   username: name,
      //   email: email,
      //   profile_picture : imageUrl
      // });

    // func();
    // console.log("GET NOTES")

  },[])

  // const saveNote = () =>{
  //   fetch('https://noteapp-2cd8c-default-rtdb.firebaseio.com/notes.json', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       content: currentNote,
  //       title: 'Test Title'
  //     })
  //   }).then((data)=>{
  //     // console.log(data.key)
  //   })
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="ma0 pa0">NOTEMAN</h3>
      </header>
      <div className="fl w-100 center">
        <SideBar NoteContent={currentNote} noteList={noteData ? noteData : {}} setCurrentNote={setCurrentNote} />
        <div id="note-section" className="fl center w-80 pv2 ph4">
          <input className="w-100 f2 input-box" type="text" placeholder="Title" />
          <input className="w-100 input-box" placeholder="Please start typing to save Note..." onChange={event=>{
            let val = event.target.value
            setCurrentNote({
              // id:0,
              content: val
            })            
            writeUserData(val)
            // console.log('jwnkdms', noteData)
          }} />     
        </div>
      </div>
    </div>
  );
}

export default App;
