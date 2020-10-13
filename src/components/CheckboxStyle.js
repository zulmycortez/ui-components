import styled from 'styled-components'

const CheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .__checkbox {
    border: 1px solid ${props => props.hovered ? "#C8CDCA" : "black"};
    height: 1.6rem;
    width: 1.6rem;
    &.on {
      svg {
        fill: black
      }
    }
    svg {
      fill: white;
      height: 1.25rem;
      width: 1.25rem;
      padding: 1px;
    }
  }
  .__checkbox-label {
    color: ${props => props.hovered ? "#C8CDCA" : "black"};
    padding-left: .5rem;
  }
`

export default CheckboxStyle
