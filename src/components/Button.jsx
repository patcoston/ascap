import '../sass/Button.scss'

const Button = ({
  backgroundColor,
  backgroundColorHover,
  borderColor,
  borderColorHover,
  labelColor,
  labelColorHover,
  labelText,
  action,
}) => {
  return <button onClick={() => action()}>{labelText}</button>
}

export default Button
