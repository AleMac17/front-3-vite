import React, { useState } from 'react'
import styles from './form.module.css'

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
    <>
      <form action='' onSubmit={handlerSubmit}>
        <label htmlFor=''>Nombre del VideoJuego</label>
        <input
          type='text'
          placeholder='The Binding of Isaac'
          value={nombreJuego}
          onChange={(e) => setNombreJuego(e.target.value)}
        />
        <label htmlFor=''>Genero del VideoJuego</label>
        <input
          type='text'
          value={generoJuego}
          placeholder='El genero no importa: GOTY'
          onChange={(e) => setGeneroJuego(e.target.value)}
        />
        <button type='submit'>ENVIAR</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </>
  )
}

export default Form
