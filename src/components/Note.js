
import './note.css'
const Note = (props) =>{

    // const items = props.noteList.map((item)=>{
        // return(<div key={item.id} className="pa2">
        //     <h3 className="ma0">{item.title}</h3>
        //     <p className="ma0">{item.content}</p>
        // </div>)
    // })
    // for (const item in props.noteList){
        
        // return(<div key={item.id} className="pa2">
        //     <h3 className="ma0">{item.title}</h3>
        //     <p className="ma0">{item.content}</p>
    //     // </div>)
    const items = Object.keys(props.noteList).map((keyName, i) => {
        return(
            
                <li key={keyName}>
         {console.log("fdsd", props)}
                    <a href="#">{props.noteList[keyName].content}</a>
                </li>
        
        )
    })
    

    return (<ul>
        {props.NoteContent.content ? <li className="scale-in-center "><p>{props.NoteContent.content}</p></li>
         : <li><p>Start typing to create a new note...</p></li>}
        {items}
    </ul>)
        
}

export default Note;