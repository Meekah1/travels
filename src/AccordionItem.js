export default function AccordionItems({ num, text, title }) {
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <p className="content-box">{text}</p>
    </div>
  );
}
