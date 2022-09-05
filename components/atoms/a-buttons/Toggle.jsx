import React from 'react'
import { BsFillCircleFill } from 'react-icons/bs'
import ToggleStyles from './Buttons.module.scss'
import { useVisualContext } from '../../../context/VisualContext'

const Toggle = (props) => {
    const ctx = useVisualContext()

  return (
     <div className={ToggleStyles.toggle}>
        <label className={ToggleStyles.label} htmlFor={props.id}>{props.label}</label>
        <button className={ToggleStyles.buttonToggle} aria-disabled={ctx.appMode === 'dark'} onClick={props.onClick} id={props.id}>
            <div className={ToggleStyles.toggleIcon}><BsFillCircleFill /></div>
        </button>
     </div> 
  )
}

export default Toggle;