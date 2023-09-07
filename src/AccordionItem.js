import { useState } from "react";


export default function AccordionItems({ num, text, title}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen () {
 setIsOpen(!isOpen)
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleOpen}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" >{isOpen ? "-" : "+"}</p>
      {isOpen ? 
        <p className="content-box">{text}</p> : ""}
    </div>
  );
}
