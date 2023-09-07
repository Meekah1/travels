import AccordionItems from "./AccordionItem";



export default function Accordion({data, onCloseIcon}) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItems onCloseIcon={onCloseIcon} title={el.title} text={el.text} num={i}/>
      ))}
    </div>
  );
}
