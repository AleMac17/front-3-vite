import React, { useState } from 'react'
import Card from './Components/Card/Card'
import Form from './Components/Form/Form'
import styles from './App.css'

const App = () => {
  const [showCard, setShowCard] = useState(false)
  const [juego, setJuego] = useState({})

  const handlerCard = (juego) => {
    if (juego) {
      setJuego({ nombre: juego.nombre, genero: juego.genero })
      setShowCard(true)
    } else {
      setJuego({})
      setShowCard(false)
    }
  }

  return (
    <div>
      <Form handlerCard={handlerCard}></Form>
      {showCard ? (
        <Card nombre={juego.nombre} genero={juego.genero} />
      ) : undefined}
    </div>
  )
}

export default App
