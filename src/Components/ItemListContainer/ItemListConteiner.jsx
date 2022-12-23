import React from 'react'
import Item from '../Item/Item'

const ItemListConteiner = () => {

    const items =[
        {   
            id: 1 ,
            titulo:"Olymphea Intense",
            importe:4250,
            contenido:"Envase de 100 ml.",
            img:"https://mardefraganciasbs.com.ar/images/olimpheaintensemujer.jpeg"
        },
        {   
            id: 2,
            titulo:"My Way",
            importe:4000,
            contenido:"Envase de 100 ml.",
            img:"https://mardefraganciasbs.com.ar/images/miway.jpg"
        }
    ]
  return (
    <>
        {items.map(({id,titulo,importe,contenido,img})=>(
            <Item id={id} titulo={titulo} importe={importe} contenido={contenido} img={img} />  )    ) }
    </>
  )
}

export default ItemListConteiner