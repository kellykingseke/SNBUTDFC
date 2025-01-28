import React, { useState } from 'react';
import './Dropdown.css';
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

import { FaBars, FaTimes } from 'react-icons/fa';

function Dropdown({options}) {
  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdowncontainer">
      {/* Button to toggle the dropdown */}
      <div className="dropdownbutton" onClick={toggleDropdown}>
      {isOpen ? <AiOutlineClose /> : <IoMenu />}
      </div>

      {/* Dropdown menu that shows/hides based on state */}

            {isOpen && (
        <div className="dropdownmenu">
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <a href={option.href}>{option.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
