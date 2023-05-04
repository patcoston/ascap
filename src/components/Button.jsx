import '../sass/Button.scss'

const Button = ({ type, label, action }) => {
  return <button onClick={() => action()}>{label}</button>
}

export default Button
