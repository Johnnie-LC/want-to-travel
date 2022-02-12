import React from 'react'
import PropTypes from 'prop-types'

const errorStyle = {
  fontWeight: 500,
  color: ' rgb(179, 4, 4)',
  textAlign: 'center'
}

const Input = ({
  state,
  setState,
  label,
  type,
  inputName,
  errorMesage,
  regex
}) => {
  const handleChange = (e) => setState({ ...state, value: e.target.value })

  const validation = () => {
    if (regex) {
      if (regex.test(state.value)) {
        setState({ ...state, isError: false })
      } else {
        setState({ ...state, isError: true })
      }
    }
  }

  return (
    <div className='formsection'>
      <label
        htmlFor={inputName}>{label}</label>
      <input
        type={type}
        id={inputName}
        name={inputName}
        value={state.value}
        onChange={handleChange}
        onKeyUp={validation}
        onBlur={validation}
        autoComplete="new-password"
        style={{
          border: `2px solid ${
            state.isError
              ? 'rgb(179, 4, 4)'
              : 'rgba(255,255,255,0.1)'}`
        }}
      />
      {
        state.isError && <h3 style={errorStyle}>{errorMesage}</h3>
      }
    </div>
  )
}

export default Input

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  inputName: PropTypes.string,
  errorMesage: PropTypes.string,
  isErrorMessage: PropTypes.bool,
  setState: PropTypes.func,
  state: PropTypes.object,
  regex: PropTypes.any
}
