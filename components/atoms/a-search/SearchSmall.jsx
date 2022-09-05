import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchStyles from './Search.module.scss';

const SearchSmall = () => {
  return (
    <form className={SearchStyles.form}>
        <button className={SearchStyles.button} type="submit"><AiOutlineSearch /></button>
        <input className={SearchStyles.input} type="text" placeholder='Search songs'/>
    </form>
  )
}

export default SearchSmall