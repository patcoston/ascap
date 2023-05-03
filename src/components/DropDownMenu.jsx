import React from 'react'

const DropDownMenu = ({ label, list }) => {
  const [open, setOpen] = React.useState(false)
  const [selection, setSelection] = React.useState('')

  return (
    <div className="dropdown-menu">
      <label>{label}</label>
      <button onClick={() => setOpen(!open)}>{selection}</button>
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
