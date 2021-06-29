import Note from "./Note";
const SideBar = (props) =>{
    return(
    <div id="sidebar" className="fl w-20 pa2">
        {props.NoteContent.content ? <p>{props.NoteContent.content}</p>
         : <p>Start typing to create a new note...</p>}
        <Note noteList={props.noteList}/>
        {/* {console.log("prorps", props)} */}
    </div>)
}

export default SideBar;