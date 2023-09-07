// import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Accordion from "./Accordion";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
// <option value={num} key={num}>
// {num}
//</option>
//))}

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  //lifting State
  const [updateItems, setUpdateItems] = useState([]);
  const [visibleAccordion, setVisibleAccordion] = useState(false)
  

  

  function handleUpdate(data) {
    setUpdateItems((updateItems) => [...updateItems, data]);
  }

  function handleDelete(id) {
    setUpdateItems((updateItems) =>
      updateItems.filter((updateItems) => updateItems.id !== id)
    );
  }

  function handleUpdateItems(id) {
    setUpdateItems((updateItems) =>
      updateItems.map((newdata) =>
        newdata.id === id ? { ...newdata, packed: !newdata.packed } : newdata
      )
    );
  }

  function handleClearData() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setUpdateItems(updateItems && []);
  }

  function toggle() {
    setVisibleAccordion(!visibleAccordion)
  }

  // function handleClose() {
  //   setIsOpen((isOpen) => isOpen.filter((isOpen) => isOpen.title))
  //   console.log(isOpen.title)
  // }

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/accordion" onClick={toggle}>Accordion</Link>
              </li>
            </ul>
          </nav>
          
        </div>

        <div className="app">
        {!visibleAccordion ? <div>
        <Logo />
           
          <Form onAddUpdateItems={handleUpdate} />
          <PackingList
            updateItems={updateItems}
            onDeleteItem={handleDelete}
            onUpdateItems={handleUpdateItems}
            onClearData={handleClearData}
          />
          <Stats updateItems={updateItems} /> 
          </div> :<Routes>
            <Route path="/accordion" element={<Accordion data={faqs}  />} />
          </Routes> }
        </div>
      </Router>
    </>
  );
}
