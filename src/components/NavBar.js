import React, { useState } from 'react'
import MenuIcon from '../svg/MenuIcon'
import NavBarStyle from './NavBarStyle'

const Items = ({ items }) => (
  <div className="items">
    {items.map(item => (
      <div
        key={item.name}
        className="item"
      >
        {item.name}
      </div>
    ))}
  </div>
)

const NavBar = ({ items }) => {
  const [on, setOn] = useState(false)

  return (
    <NavBarStyle>
      <div
        tabIndex={0}
        role="menu"
        className="menu-icon"
        onClick={() => { setOn(!on) }}
      >
        <MenuIcon />
      </div>
      {on && <Items items={items} />}
    </NavBarStyle>
  )
}

export default NavBar
