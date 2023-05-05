import '../sass/Button.scss'

const Button = ({ selected, type, labelText, action }) => {
  let buttonClass = 'button-default'
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
  if (selected) {
    buttonClass += ' selected'
  }
  return (
    <button className={buttonClass} onClick={() => action()}>
      {labelText}
    </button>
  )
}

export default Button
