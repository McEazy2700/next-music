import React, { useRef } from "react";
import styles from "./Item.module.scss";

const DropDownOption = ({
  id = "option",
  name = "Option",
  groupName = "category",
  className = "",
  onSelect
}) => {
    const inputRef = useRef()
    const inputClickHandler = ()=>{
        onSelect(inputRef.current.children[1].textContent)
    }
  return (
    <div onClick={inputClickHandler} ref={inputRef} className={`${styles.item} ${className}`}>
      <input
        className={styles.radio}
        type="radio"
        id={id.toLowerCase()}
        name={groupName.toLowerCase()}
      />
      <label htmlFor={id.toLowerCase()}>{name}</label>
    </div>
  );
};

export default DropDownOption;
