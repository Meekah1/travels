// import { useState } from "react";

import { useState } from "react";

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
    setUpdateItems(updateItems && []);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddUpdateItems={handleUpdate} />
      <PackingList
        updateItems={updateItems}
        onDeleteItem={handleDelete}
        onUpdateItems={handleUpdateItems}
        onClearData={handleClearData}
      />
      <Stats updateItems={updateItems} />
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

function PackingList({
  updateItems,
  onDeleteItem,
  onUpdateItems,
  onClearData,
}) {
  const [sortBy, setSortBy] = useState("input");
  // const [clearData, setClearData] = useState(updateItems);

  // function clearList() {
  //   setClearData(!clearData);
  // }

  let sortedItems;

  if (sortBy === "input") sortedItems = updateItems;

  if (sortBy === "description")
    sortedItems = updateItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = updateItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((data) => (
          <List
            item={data}
            key={data.id}
            onDeleteItem={onDeleteItem}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>

        <button onClick={onClearData}> Clear list</button>
      </div>
    </div>
  );
}

function List({ item, onDeleteItem, onUpdateItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ updateItems }) {
  const numItems = updateItems.length;
  const packedItems = updateItems.filter(
    (updateItem) => updateItem.packed
  ).length;

  const numPercent = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {numPercent === 100
        ? "You have everything! Ready to go ✈️ "
        : `💼You have ${numItems} Items on your list, and you have already Packed
      ${packedItems} (${numPercent}%)`}
    </footer>
  );
}
