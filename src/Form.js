import { useState } from "react";

export default function Form({ onAddUpdateItems }) {
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
