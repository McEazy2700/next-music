import React, { FC, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownOption from "../../atoms/a-items/DropDownOption";
import styles from "./DropDown.module.scss";

// const items = ["Pop", "Jazz", "Rege", "Afro", "Soft", "Chill"];
interface Item {
  name: string;
  id: number;
}

type MyProps = {
  items: [Item];
  category: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};

const DropDown: FC<MyProps> = ({ items, category, onSelect}) => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Category");
  const dropdownClickHandler = () => {
    dropDownIsOpen ? setDropDownIsOpen(false) : setDropDownIsOpen(true);
  };
  return (
    <div className={styles.dropdown}>
      <div
        className={`${styles.options} ${dropDownIsOpen ? styles.active : ""}`}
      >
        {items.map((item) => (
          <DropDownOption
            className={styles.option}
            key={item.id}
            groupName="genre"
            id={item.name.toLowerCase()}
            name={item.name}
            onSelect={setSelected}
          />
        ))}
      </div>
      <div onClick={dropdownClickHandler} className={styles.selected}>
        <span>{selected}</span>
        <MdKeyboardArrowDown className={styles.icon} />
      </div>
    </div>
  );
};

export default DropDown;
