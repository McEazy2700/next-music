import React from 'react';
import NavStyles from './Navigation.module.scss'

const NavGroup = ({navItems, name}) => {
  
  return (
    <ul className={NavStyles.navGroup}>
      <legend>{name}</legend>
      {
        navItems.map((item, index)=>(
          <div key={index}>{item}</div>
        ))
      }
    </ul>
  )
}

export default NavGroup;