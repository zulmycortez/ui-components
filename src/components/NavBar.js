import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import MenuIcon from '../svg/MenuIcon'
import NavBarStyle from './NavBarStyle'

const Items = ({ items, onItemClick }) => (
  <div className="items">
    {items.map(item => (
      <div 
        key={item.name}
        role="menu"
        tabIndex={0}
        className="item"
        onClick={() => { onItemClick(item.url) }}
      >
        {item.name}
      </div>
    ))}
  </div>
)

const NavBar = ({ items }) => {
  const [on, setOn] = useState(false)
  const history = useHistory()

  const onItemClick = url => {
    history.push(url)
  }

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
      {on && (
        <Items
          items={items}
          onItemClick={onItemClick}
        />
      )
      }
    </NavBarStyle>
  )
}

export default NavBar
