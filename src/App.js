import React, { useState } from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript library.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineers.",
  },
  {
    title: "How do we use React?",
    content: " You use React by creating components.",
  },
];

const options = [
  { label: "The color red", value: "red" },
  { label: "The color green", value: "green" },
  { label: "A shade of blue", value: "blue" },
];

function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
          label="Select a color"
        />
      </Route>
      <Route path="/translate"><Translate /></Route>
    </div>
  );
}

export default App;
