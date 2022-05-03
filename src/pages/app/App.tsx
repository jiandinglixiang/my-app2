import React, { useState } from "react";
import sty from "./App.module.scss";
import Block from "../../components/Block/index";
import CloseIcon from "@mui/icons-material/Close";

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

const colorsComponent: Array<Function> = [
  () => {
    return <div>red</div>;
  },
  () => {
    return <div>green</div>;
  },
  () => {
    return <div>blue</div>;
  },
  () => {
    return <div>yellow</div>;
  },
  () => {
    return <div>purple</div>;
  },
  () => {
    return <div>orange</div>;
  },
  () => {
    return <div>pink</div>;
  },
  () => {
    return <div>brown</div>;
  },
  () => {
    return <div>gray</div>;
  },
];

function App() {
  const [animation, setAnimation]: [Array<string>, Function] = useState([]);

  function enter(x: number) {
    const currently = animation[x];
    if (!currently) {
      animation[x] = `${sty.enter} ing`;
      setAnimation([...animation]);
      return;
    }
    if (currently.includes("ing")) {
      return;
    }
    if (currently === sty.enter) {
      animation[x] = `${sty.leave} ing`;
      setAnimation([...animation]);
    }
  }

  function leave(x: number) {
    const currently = animation[x];
    if (currently?.includes("ing")) {
      if (currently.includes(sty.leave)) {
        animation[x] = "";
        setAnimation([...animation]);
        return;
      }
      animation[x] = sty.enter;
      setAnimation([...animation]);
    }
  }

  return (
    <div>
      <ul className={sty.container}>
        {colors.map((value, index) => {
          return (
            <li key={value}>
              <span
                style={{
                  display:
                    animation[index] === sty.enter ? "inline-block" : "none",
                }}
                className={sty["icon-close"]}
                onClick={() => enter(index)}
              >
                <CloseIcon />
              </span>

              <div
                style={{ backgroundColor: value }}
                className={animation[index]}
                onClick={() => enter(index)}
                onAnimationEnd={() => leave(index)}
              >
                {colorsComponent[index]()}
              </div>
            </li>
          );
        })}
        <Block />
      </ul>
    </div>
  );
}

export default App;
