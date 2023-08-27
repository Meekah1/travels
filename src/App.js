// import { useState } from "react";

import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Food", quantity: 3, packed: true },
];

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

  return (
    <div className="app">
      <Logo />
      <Form onAddUpdateItems={handleUpdate} />
      <PackingList updateItems={updateItems} onDeleteItem={handleDelete} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Travel lists 💼</h1>;
}

function Form({ onAddUpdateItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newItems = { description, quantity, packed: false, id: Date.now() };
    console.log(newItems);

    onAddUpdateItems(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip 😊</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((arrLength) => (
          <option value={arrLength} key={arrLength}>
            {arrLength}
          </option>
        ))}
      </select>
      <input
        type="text "
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* <List input={input} /> */}

      <button>Add</button>
    </form>
  );
}

function PackingList({ updateItems, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {updateItems.map((data) => (
          <List item={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      💼You have X Items on your list, and you have already Packed X(X%)
    </footer>
  );
}
