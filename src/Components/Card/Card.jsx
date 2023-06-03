import React from 'react'
import styles from './card.module.css'

const Card = (props) => {
  return (
    <div className={styles.div}>
      <h3>El videojuego: {props.nombre}</h3>
      <h3>Del genero: {props.genero}</h3>
    </div>
  )
}

export default Card
