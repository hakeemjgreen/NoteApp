
const Note = (props) =>{

    const items = props.noteList.map((item)=>{
        return(<div key={item.id} className="pa2">
            <h3 className="ma0">{item.title}</h3>
            <p className="ma0">{item.content}</p>
        </div>)
    })

    return (items)
        
}

export default Note;