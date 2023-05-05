import '../sass/DropDownMenu.scss'
import { useState } from 'react'

const DropDownMenu = ({ label, list }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState('')

  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <button className="button" onClick={() => setOpen(!open)}>
        {selection}
      </button>
      {open && (
        <ul>
          {list.map(item => (
            <li
              key={item.uid}
              onClick={() => {
                setSelection(item.type)
                setOpen(false)
              }}
            >
              {item.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownMenu
