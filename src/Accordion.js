import { useState } from "react";
import AccordionItems from "./AccordionItem";



export default function Accordion({data, onCloseIcon}) {
 const [curOpen, setCurOpen] = useState(null)


  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems curOpen={curOpen} onOpen={setCurOpen} onCloseIcon={onCloseIcon} title={el.title}  num={i}>
          {el.text}
        </AccordionItems>
        
      ))}
      <AccordionItems curOpen={curOpen} onOpen={setCurOpen} onCloseIcon={onCloseIcon} title="Test 2"  num={22}>
          <p>Things to achieve</p>
          <ul>
            <li>React is beautiful</li>
            <li>I wil be a force to reckon with and also a multi millionaire in Dollars in Software Development world by Almighty Allah's Grace</li>
            <li>I will always propagate islam whenever i am opportuned to address the world</li>
          </ul>
        </AccordionItems>
    </div>
  );
}
