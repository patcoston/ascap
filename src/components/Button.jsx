import React from 'react'

const Button = ({ type, label, action }) => {
  return <button onClick={() => action()}>{label}</button>
}

export default Button
