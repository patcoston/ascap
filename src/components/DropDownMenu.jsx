import '../sass/DropDownMenu.scss'
import { useState } from 'react'

const DropDownMenu = ({ setType, isError, label, list }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState('')

  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <button
        className={isError ? 'button error' : 'button'}
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
                onClick={() => {
                  setSelection(item.type)
                  setType(item.type)
                  setOpen(false)
                }}
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
