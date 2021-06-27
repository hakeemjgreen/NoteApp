import Note from "./Note";
const SideBar = (props) =>{
    return(
    <div id="sidebar" className="fl w-20 pa2">
        {props.NoteContent ? <div className='w-100 fl center'>
            <p className='fl center'> {props.NoteContent}</p>
            <a href="#" className="fl">Save</a>
            <a href="#" onClick={()=>{
                props.setCurrentNote('');
            }} className="fl">Delete</a>
        </div> : <p>Start typing to create a new note...</p>}
        <Note noteList={props.noteList}/>
    </div>)
}

export default SideBar;