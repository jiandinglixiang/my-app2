import React from "react";
import sty from "./App.module.scss";
import Block from "../../components/Block/index";
const colors: Array<string> = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
];

function App() {
  return (
    <ul className={sty.container}>
      {colors.map((value) => {
        return (
          <li key={value} style={{ backgroundColor: value }}>
            {value}
          </li>
        );
      })}
      <Block />
    </ul>
  );
}

export default App;
