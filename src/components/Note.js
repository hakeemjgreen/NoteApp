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
    const arrayReverseObj = (obj) => {
        let newArray = []
      
        Object.keys(obj)
          .sort()
          .reverse()
          .forEach(key => {
            console.log("OBJ is", obj[key])
            newArray.push( {
            'key':key, 
            'content':obj[key].content
            })
          })
      
        console.log("NEWW", newArray)
        return newArray  
    }

    let reversedArray = arrayReverseObj(props.noteList)

    const items = reversedArray.map((item) => {
        let key = item.key;
        return(
            
               
                <li
                class="db w-100 fl lh-copy pa3 ph0-l bb b--black-10" key={item.key}>
                  <div class="pl3 fl">
                  <span class="f6 db black-70"><h4 className="ma0 pa0">Title Goes here</h4></span>
                  <span class="f6 db black-70">{item.content}</span>
                    {/* <a className="link" href="#">{item.content}</a> */}
                  </div>
                  <div>
                    <a href="tel:" class="f6 link blue hover-dark-gray">Delete</a>
                  </div>
              </li>
        
        )
    })
    

    return (<ul className="ma0 pa0">
        {/* {props.NoteContent.content ? 
        <li className="scale-in-center "><p>{props.NoteContent.content}</p></li>
         : <li><p>Start typing to create a new note...</p></li>} */}
        {items}
        
        
    </ul>)
        // return("ee")
}

export default Note;