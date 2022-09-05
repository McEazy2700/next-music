import React from 'react';
import NavStyles from './Navigation.module.scss';


const NavItem = ({icon, text}) => {
  return (
    <li className={NavStyles.navItem}>
        <span className={NavStyles.icon}>{icon}</span>
        <span>{text}</span>
    </li>
  )
}

export default NavItem;