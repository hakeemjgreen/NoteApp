const Card = (props) =>{
    return(
        <div className="card fl pa2 w-25">
              <div className="bg-white pa2 br2 outline">
              <h2>{props.title}</h2>
              <p>{props.note}</p>
              </div>
            </div>
    )
}

export default Card;