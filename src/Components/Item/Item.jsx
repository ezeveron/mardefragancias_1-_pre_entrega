import React from 'react'
import Card from '../Card/Card'

const Item = (props) => {
    const {id,titulo,importe,contenido,img} =props
  return (
    <div>
        <div className=''>
            <Card
            id={id}
            titulo={titulo}
            importe={importe}
            contenido={contenido}
            img={img}
            />
          
        </div>
    </div>
  )
}

export default Item