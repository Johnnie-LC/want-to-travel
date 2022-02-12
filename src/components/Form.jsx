/* eslint-disable max-len */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import { regex } from '../assets/regex'

const errorStyle = {
  fontWeight: 500,
  color: ' rgb(179, 4, 4)',
  textAlign: 'center'
}

const successStyle = {
  fontWeight: 500,
  color: 'rgb(4, 179, 4)',
  padding: '10px',
  borderRadius: '5px',
  background: '#4c7f80',
  textAlign: 'center'
}

const Form = ({ initialState, children }) => {
  const [name, setName] =
    useState({
      value: initialState.name,
      isError: null
    })
  const [email, setEmail] =
    useState({
      value: initialState.email,
      isError: null
    })
  const [phone, setPhone] =
    useState({
      value: initialState.phone,
      isError: null
    })
  const [age, setAge] =
    useState({
      value: initialState.age,
      isError: null
    })
  const [isComplete, setIsComplete] = useState(false)
  const [isSend, setIsSend] = useState(false)

  const resetState = ({ name, email, phone, age }) => {
    setName({
      value: name,
      isError: null
    })
    setEmail({
      value: email,
      isError: null
    })
    setPhone({
      value: phone,
      isError: null
    })
    setAge({
      value: age,
      isError: null
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.isError || email.isError || phone.isError) {
      setIsComplete(!isComplete)
      setTimeout(() => {
        setIsComplete(isComplete)
      }, 2000)
    } else {
      setIsSend(true)
      console.log(
        {
          name: name.value,
          email: email.value,
          phone: parseInt(phone.value),
          age: parseInt(age.value),
          aerolinea: children.props.children
        }
      )

      setTimeout(() => {
        resetState(initialState)
        setIsSend(false)
      }, 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="none">
      {children}
      <Input
        state={name}
        setState={setName}
        label='Nombre Completo'
        type='text'
        inputName='Name'
        errorMesage='Solo permitidos: letras, espacios y acentos.'
        regex={regex.name}
      />

      <Input
        state={email}
        setState={setEmail}
        label='Email'
        type='email'
        inputName='Email'
        errorMesage='Debe contener @ y .com .co .klda'
        regex={regex.email}
      />

      <Input
        state={phone}
        setState={setPhone}
        label='Celular'
        type='tel'
        inputName='Phone'
        errorMesage='Permitido de 4 a 12 digitos'
        regex={regex.phone}
      />

      <div className='formsection'>
        <label
          htmlFor="age">Edad: {age.value} años </label>
        <input
          type="range"
          id='age'
          name='age'
          min="18"
          max="100"
          value={age.value}
          onChange={(e) => setAge({ ...age, value: e.target.value })}
        />
      </div>
      <input
        className='sendSubmit' type="submit" name='submit' value="Enviar"/>
      {
        isComplete &&
        <h3 style={errorStyle}>
            Por favor rellene el formulario como se debe
        </h3>
      }
      {
        isSend &&
        <h3 style={successStyle}>
          Tu información fue enviada con éxito, estaremos en contacto contigo
        </h3>
      }
    </form>
  )
}

export default Form

Form.propTypes = {
  initialState: PropTypes.object,
  children: PropTypes.element
}
