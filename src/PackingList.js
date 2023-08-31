import { useState } from "react";
import List from "./List";

export default function PackingList({
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
