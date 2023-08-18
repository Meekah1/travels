const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Travel lists 💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3> What do you need for your trip 😊</h3>
    </div>
  );
}

function PackingList() {
  return (
    <ul className="list">
      {initialItems.map((items) => (
        <List item={items} />
      ))}
    </ul>
  );
}

function List({ item }) {
  return <li>{item.description}</li>;
}

function Stats() {
  return (
    <footer className="stats">
      💼You have X Items on your list, and you have already Packed X(X%)
    </footer>
  );
}
