import '../sass/DropDownMenu.scss'
import { useState, useEffect, useRef } from 'react'

const DropDownMenu = ({ setType, isError, label, list }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState('')
  const menuRef = useRef(null)

  const handleClick = type => {
    setSelection(type)
    setType(type)
    setOpen(false)
  }

  // TODO: menu div is not getting focus on onBlur
  // event is not firing to hide menu when you click off it
  useEffect(() => {
    console.log(open)
    if (open) {
      console.log('set focus')
      menuRef.current.focus()
    }
  }, [open])

  const hideMenu = () => {
    console.log('hide menu')
    setOpen(false)
  }

  const gettingFocus = () => {
    console.log('got focus')
  }

  const getButtonClass = () => {
    let className = 'button'
    if (isError && !open) {
      className += ' error'
    }
    if (!isError && open) {
      className += ' opened'
    }
    if (!isError && selection) {
      className += ' menu-selected'
    }
    console.log(open, className)
    return className
  }

  return (
    <div className="dropdown-menu">
      <label
        onClick={() => setOpen(!open)}
        className={selection ? 'label selected' : 'label'}
      >
        {label}
      </label>
      <button className={getButtonClass()} onClick={() => setOpen(!open)}>
        {selection}
      </button>
      {open && (
        <div
          className="menu"
          ref={menuRef}
          onFocus={() => gettingFocus()}
          onBlur={() => hideMenu()}
        >
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
