
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
                    <div >{props.noteList[keyName].content}</div>
                </li>
        
        )
    })
    

    return (<ul>{items}</ul>)
        
}

export default Note;