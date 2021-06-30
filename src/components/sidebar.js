import Note from "./Note";
const SideBar = (props) =>{
    return(
    <div id="sidebar" className="fl w-20 pa2">
        
        <Note NoteContent={props.NoteContent} noteList={props.noteList}/>
    </div>)
}

export default SideBar;