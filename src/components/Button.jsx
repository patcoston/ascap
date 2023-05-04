import '../sass/Button.scss'

const Button = ({ type, labelText, action }) => {
  var buttonClass = 'button-default'
  switch (type) {
    case 'cancel': {
      buttonClass = 'button-cancel'
      break
    }
    case 'continue': {
      buttonClass = 'button-continue'
      break
    }
  }
  return (
    <button className={buttonClass} onClick={() => action()}>
      {labelText}
    </button>
  )
}

export default Button
