import React, { useState } from "react";
import { useOutsideClick } from "../../hooks";
import './style.scss'

type DropdownProps = {
  name: string,
  options: string[],
  style?: React.CSSProperties,
  placeholder?: string
}

const Dropdown = ({ name, options, style, placeholder='Select an Option' }: DropdownProps) => {
  const [selected, setSelected] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const handleOptionClick = (option: string) => {
    setSelected(option);
  };

  const handleClickOutside = () => setShowOptions(false);
  const ref = useOutsideClick(handleClickOutside);
  
  return (
    <div ref={ref} style={style} onClick={() => setShowOptions(!showOptions)} className="custom-dropdown-container">
      <div className={`custom-dropdown-selected ${!selected && 'empty'} ${showOptions && 'open'}`}>
        {selected ? selected : placeholder}
      </div>
      {
        showOptions && (
          <ul className="custom-dropdown-options">
            {options.map((option, index) => (
              <li
                key={index}
                className="custom-dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )
      }
      <input type="hidden" name={name} value={selected} />
    </div>
  )
}

export default Dropdown;
