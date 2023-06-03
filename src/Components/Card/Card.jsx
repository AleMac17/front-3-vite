import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h3>{props.nombre}</h3>
      <h3>{props.genero}</h3>
    </div>
  )
}

export default Card
