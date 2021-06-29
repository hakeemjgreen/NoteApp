import './App.css';
import SideBar from './components/sidebar';
import { useState, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import Firebase from "firebase";

const loadedNotes = {};

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
  let [noteData, setNoteData] = useState({});

  const writeUserData = (typedContent) => {
    console.log("is ffd", noteData)

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
      let newList;
      noteRef.on('value', (snapshot) => {
        const data = snapshot.val();
        for(const key in snapshot.val()){
          let content = data[key].content
          //If key is different add to note state
          
            console.log("Differentttt")
            
            let notess={
              [key] : {content}
            }
            newList = {
              ...notess, 
              ...newList
            }
            console.log("NOTESSS", newList)
          
        }
        setNoteData(newList)
      });
      let func = () =>{
        console.log("LISTTT", newList)
      }
      
      // firebase.database().ref('users/' + userId).set({
      //   username: name,
      //   email: email,
      //   profile_picture : imageUrl
      // });

    func();
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
        REDdd
      </header>
      <div className="fl w-100 center">
        <SideBar NoteContent={currentNote} noteList={noteData} setCurrentNote={setCurrentNote} />
        <div id="note-section" className="fl center w-80 pa2">
          <input className="w-100" placeholder="Please start typing to save Note..." onChange={event=>{
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
