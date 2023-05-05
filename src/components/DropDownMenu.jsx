import '../sass/DropDownMenu.scss'
import { useState } from 'react'

const DropDownMenu = ({ setType, isError, label, list }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState('')

  const handleClick = type => {
    setSelection(type)
    setType(type)
    setOpen(false)
  }

  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <button
        className={isError && !open ? 'button error' : 'button'}
        onClick={() => setOpen(!open)}
      >
        {selection}
      </button>
      {open && (
        <div className="menu">
          <ul className="list">
            {list.map(item => (
              <li
                className="item"
                key={item.uid}
                onClick={() => handleClick(item.type)}
              >
                {item.type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDownMenu
