import React from 'react'
import SliderStyle from './SliderStyle'

const Slider = ({ value, name, onChange, label, ...props }) => {
  const onSliderChange = e => {
    e.preventDefault()
    onChange({ target: { name, value: !value }})
  }

  return (
    <SliderStyle
      value={value}
      role="slider"
      onClick={onSliderChange}
    >
      <div value={value} className="__slider">
        <div className={value ? "__notch on" : "__notch"} />
      </div>
      <div className="__slider-message">
        {label}
      </div>
    </SliderStyle>
  )
}

export default Slider
