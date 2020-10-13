import styled from 'styled-components'

const sliderHeight = 1.5
const notchHeight = 1
const SwitchStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .__slider {
    height: ${sliderHeight}rem;
    width: 3rem;
    background-color: ${props => props.value ? "#76D48D" : "#6D716E"};
    border-radius: 3rem;
    box-sizing: border-box;
    position: relative;
    transition: background-color .2s;
    .__notch {
      position: absolute;
      width: 1rem;
      height: ${notchHeight}rem;
      background-color: white;
      border-radius: 1rem;
      margin-top: ${(sliderHeight - notchHeight) / 2}rem;
      margin-left: ${(sliderHeight - notchHeight) / 2}rem;
      transition: 0.2s;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
      &.on {
        right: ${(sliderHeight - notchHeight) / 2}rem;;
      }
    }
  }
  .__slider-message {
    margin-left: 1rem;
  }
`

export default SwitchStyle
