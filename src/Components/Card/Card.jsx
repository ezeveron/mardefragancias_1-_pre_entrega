import React from 'react'
import "./Card.css"

const Card = (props) => {
    
        const {titulo, importe, contenido, img} =props ;
     
  return (
    
      <div className="card" style={{width: "18rem"}}>
        <img src={img } className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{importe}</p>
          <p className="card-text">{contenido}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    
  )
}

export default Card