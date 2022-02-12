import React from 'react'
import PropTypes from 'prop-types'
import Form from './Form'
import '../styles/Aerolinea.css'

const initialState = {
  name: '',
  email: '',
  phone: '',
  age: 18
}

const Aerolinea = ({ aerolinea }) => {
  return (
    <main>
      <p>
        {`Hola bienvenido, sabemos que quieres viajar en un ${aerolinea} 
        por favor diligencie el siguiente formulario`}
      </p>
      <section>
        <Form initialState={initialState}>
          <h1>{aerolinea}</h1>
        </Form>
      </section>
    </main>
  )
}

export default Aerolinea

Aerolinea.propTypes = {
  aerolinea: PropTypes.string
}
