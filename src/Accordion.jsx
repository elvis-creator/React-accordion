import React from 'react'
import {FaPlus} from "react-icons/fa6";
import {FaMinus} from "react-icons/fa6";
import { useState } from 'react';

function Accordion({question, answer}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={isOpen && "open"} onClick={() => setIsOpen(!isOpen)}>
        <div>
            <span>{isOpen ? <FaMinus/> : <FaPlus/>}</span>
            <h4>{question}</h4>
        </div>
        {isOpen && <small>{answer}</small>}
    </li>
  )
}

export default Accordion;


