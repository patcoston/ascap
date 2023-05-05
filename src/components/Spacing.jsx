import { useState, useEffect } from 'react'
import '../sass/Spacing.scss'

const Spacing = ({ children, top, bottom, left, right }) => {
  const getClassName = () => {
    let className = 'space'
    if (top) {
      className += ` top-${top}`
    }
    if (bottom) {
      className += ` bottom-${bottom}`
    }
    if (left) {
      className += ` left-${left}`
    }
    if (right) {
      className += ` right-${right}`
    }
    console.log(className)
    return className
  }

  const [className, setClassName] = useState('')

  useEffect(() => {
    setClassName(getClassName())
  }, [])

  return (
    <div className="spacing">
      <div className={className}>{children}</div>
    </div>
  )
}

export default Spacing
