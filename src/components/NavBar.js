import React from 'react'
import NavBarStyle from './NavBarStyle'

const NavBar = ({ items }) => {
  return (
    <NavBarStyle>
      {items.map(item => (
        <div className="item">
          {item.name}
        </div>
      ))}
    </NavBarStyle>
  )
}

export default NavBar
