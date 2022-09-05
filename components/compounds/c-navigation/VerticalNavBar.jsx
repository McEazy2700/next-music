import React from 'react'
import { ImMusic } from 'react-icons/im'
import { useVisualContext } from '../../../context/VisualContext';
import NavStyles from './Navigation.module.scss';
import Toggle from '../../atoms/a-buttons/Toggle';

const defaultBrand = {
    logo: <ImMusic />,
    name: 'Tripple Music'
}


const defaultItems = []
const defaultFooter = []

const VerticalNavBar = ({brand, items, footerItems}) => {
    const ctx = useVisualContext()
    brand = brand || defaultBrand
    items = items || defaultItems
    footerItems = footerItems || defaultFooter
  return (
    <nav className={NavStyles.nav}>
        <header className={NavStyles.header}>
            <div>{brand.logo}</div>
            <div>{brand.name}</div>
        </header>
        <main>
            {items.map((item, index)=>(
                <div key={index}>{item}</div>
            ))}
        </main>
        <footer>
            {footerItems.map((item)=>(
                <div key={index}>{item}</div>
            ))}
        </footer>
        <div>
            <Toggle 
            onClick={ctx.setAppModeHandler}
            label={'Dark Mode'}
            id={'toggle'}/>
        </div>
    </nav>
  )
}

export default VerticalNavBar