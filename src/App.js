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

export default function App() {
  //lifting State
  const [updateItems, setUpdateItems] = useState([]);

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

  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Accordion</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="app">
          <Logo />
          <Routes>
            <Route path="/" element={<Accordion />} />
          </Routes>
          <Form onAddUpdateItems={handleUpdate} />
          <PackingList
            updateItems={updateItems}
            onDeleteItem={handleDelete}
            onUpdateItems={handleUpdateItems}
            onClearData={handleClearData}
          />
          <Stats updateItems={updateItems} />
        </div>
      </Router>
    </>
  );
}
