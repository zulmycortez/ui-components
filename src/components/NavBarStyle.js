import styled from 'styled-components'

const NavBarStyle = styled.div`
  text-align: left;
  width: 25%;
  display: flex;
  flex-direction: column;
  .items {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .item {
    padding: 1rem;
    cursor: pointer;
  }
  .menu-icon {
    cursor: pointer;
    display: flex;
    outline: none;
    height: max-content;
    margin: 1rem;
    justify-content: center;
    svg {
      height: 25px;
      width: 25px;
    }
  }
`

export default NavBarStyle
