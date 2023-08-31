export default function Stats({ updateItems }) {
  const numItems = updateItems.length;
  const packedItems = updateItems.filter(
    (updateItem) => updateItem.packed
  ).length;

  const numPercent = Math.round((packedItems / numItems) * 100);

  return (
    <div>
      {packedItems || numItems ? (
        <footer className="stats">
          {numPercent === 100
            ? "You have everything! Ready to go ✈️ "
            : `💼You have ${numItems} Items on your list, and you have already Packed
        ${packedItems} (${numPercent}%)`}
        </footer>
      ) : (
        <footer className="stats">
          Start adding some items to your packing list 🧨
        </footer>
      )}
    </div>
  );
}
