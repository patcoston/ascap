import '../sass/DropDownMenu.scss'
import { useState, useEffect, useRef } from 'react'

const DropDownMenu = ({ setType, isError, label, list }) => {
  const [open, setOpen] = useState(false)
  const [selection, setSelection] = useState('')
  const [menuWidth, setMenuWidth] = useState(500)
  const [width, setWidth] = useState(window.innerWidth)

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const handleClick = type => {
    setSelection(type)
    setType(type)
    setOpen(false)
  }

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // TODO: menu div is not getting focus on onBlur
  // event is not firing to hide menu when you click off it
  useEffect(() => {
    if (open) {
      menuRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (buttonRef.current) {
      setMenuWidth(buttonRef.current.offsetWidth - 2)
    }
  })

  useEffect(() => {
    if (buttonRef.current) {
      setMenuWidth(buttonRef.current.offsetWidth - 2)
    }
  }, [width])

  const hideMenu = () => {
    setOpen(false)
  }

  const gettingFocus = () => {
    console.log('got focus') // DEBUG for TODO
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
      <button
        ref={buttonRef}
        className={getButtonClass()}
        onClick={() => setOpen(!open)}
      >
        {selection}
        <span class={open ? 'caret up' : 'caret'}>V</span>
      </button>
      {open && (
        <div
          className="menu"
          ref={menuRef}
          onFocus={() => gettingFocus()}
          onBlur={() => hideMenu()}
          style={{ width: menuWidth }}
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
