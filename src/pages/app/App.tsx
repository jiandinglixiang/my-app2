import React, { useState } from "react";
import sty from "./App.module.scss";
import Block from "../../components/Block/index";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { deepOrange, deepPurple } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import { Chip } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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
  const [animation, setAnimation]: [Array<string>, Function] = useState([]);

  function enter(x: number, disable?: boolean) {
    const currently = animation[x];
    if (!currently) {
      animation[x] = `${sty.enter} ing`;
      setAnimation([...animation]);
      return;
    }
    if (currently.includes("ing")) {
      return;
    }
    if (!disable && currently === sty.enter) {
      animation[x] = `${sty.leave} ing`;
      setAnimation([...animation]);
    }
  }

  function leave(x: number, event: React.AnimationEvent) {
    const currently = animation[x];
    const className = (event.target as Element).className;
    if (className !== currently) {
      // 非目标触发禁止执行
      return;
    }
    console.log(event, sty.enter);
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
                onClick={() => enter(index, true)}
                onAnimationEnd={(event) => leave(index, event)}
                id="animation-container"
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

const colorsComponent: Array<Function> = [
  () => {
    return (
      <div>
        <Button variant="contained" startIcon={<RestartAltIcon />}>
          Reset
        </Button>
        <Avatar>H </Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        <Badge badgeContent={44} color="success">
          <MailIcon color="action" />
        </Badge>
      </div>
    );
  },
  () => {
    return (
      <div>
        <Chip component="p" label="My custom" color="info" clickable />
        <Divider variant="inset" />
        <Chip component="p" label="My custom2" color="error" clickable />
      </div>
    );
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
    return (
      <div>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={`${process.env.PUBLIC_URL}/logo512.png`} />
            </ListItemAvatar>
            <ListItemText> My custom</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={`${process.env.PUBLIC_URL}/logo192.png`} />
            </ListItemAvatar>
            <ListItemText secondary={<div>124124124</div>}>
              My custom
            </ListItemText>
          </ListItem>
        </List>
      </div>
    );
  },
  () => {
    return (
      <div>
        <Link to="/forward2">Next Page </Link>
      </div>
    );
  },
];

export default App;
