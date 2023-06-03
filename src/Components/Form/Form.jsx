import React, { useState } from 'react'

const Form = ({ handlerCard }) => {
  const [nombreJuego, setNombreJuego] = useState('')
  const [generoJuego, setGeneroJuego] = useState('')
  const [error, setError] = useState('')
  const [objetoJuego, setObjetoJuego] = useState({})

  const handlerSubmit = (e) => {
    e.preventDefault()

    const objetoJuego = {
      nombre: nombreJuego.trim(),
      genero: generoJuego,
    }

    if (objetoJuego.nombre.length >= 3 && objetoJuego.genero.length >= 6) {
      setError('')
      handlerCard(objetoJuego)
    } else {
      setError('Por favor chequea que la información sea correcta')
      handlerCard()
    }

    setGeneroJuego('')
    setNombreJuego('')
  }

  return (
    <div>
      <form action='' onSubmit={handlerSubmit}>
        <label htmlFor=''>Nombre del Video Juego</label>
        <input
          type='text'
          value={nombreJuego}
          onChange={(e) => setNombreJuego(e.target.value)}
        />
        <label htmlFor=''>Genero del Video Juego</label>
        <input
          type='text'
          value={generoJuego}
          onChange={(e) => setGeneroJuego(e.target.value)}
        />
        <button type='submit'>ENVIAR</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Form
