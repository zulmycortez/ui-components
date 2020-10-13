import React from 'react'
import SwitchStyle from './SwitchStyle'

const Switch = ({ value, name, onChange, label, ...props }) => {
  const onSliderChange = e => {
    e.preventDefault()
    onChange({ target: { name, value: !value }})
  }

  return (
    <SwitchStyle
      value={value}
      onClick={onSliderChange}
    >
      <div value={value} className="__slider">
        <div className={value ? "__notch on" : "__notch"} />
      </div>
      <div className="__slider-message">
        {label}
      </div>
    </SwitchStyle>
  )
}

export default Switch
