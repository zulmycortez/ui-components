import React, { useState } from 'react'
import CheckIcon from '../svg/CheckIcon'
import CheckboxStyle from './CheckboxStyle'

const Checkbox = ({ value, name, onChange, label }) => {
  const [hovered, setHovered] = useState(false)
  const onCheckboxChange = e => {
    e.preventDefault()
    onChange({ target: { name, value: !value }})
  }
  const onKeyDown = e => { e.keyCode === 13 && onCheckboxChange(e) }
  const onHoverEnter = () => { setHovered(true) }
  const onHoverLeave = () => { setHovered(false) }

  return (
    <CheckboxStyle
      value={value}
      tabIndex={0}
      hovered={hovered}
      onClick={onCheckboxChange}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      aria-selected={value}
      onKeyDown={onKeyDown}
    >
      <div
        role="checkbox"
        aria-checked={value}
        className={value ? "__checkbox on" : "__checkbox"}
      >
        <CheckIcon />
      </div>
      <div
        aria-label={label}
        className="__checkbox-label"
      >
        {label}
      </div>
    </CheckboxStyle>
  )
}

export default Checkbox
