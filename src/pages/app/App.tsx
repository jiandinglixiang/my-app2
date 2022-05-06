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
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
  Tooltip,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextareaAutosize,
  Alert,
  AlertTitle,
  Backdrop,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Skeleton,
  Snackbar,
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
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(!open)}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(!open)}
          message="Note archived"
          action={
            <>
              <div>123</div>
              <button>243</button>
            </>
          }
        >
          <Alert severity="warning">This is a warning message!</Alert>
        </Snackbar>
      </div>
    );
  },
  () => {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
        <Button onClick={() => setOpen(!open)}>open</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>I am a title</DialogTitle>
          <DialogContent>
            <div>
              <CircularProgress color="success" />
            </div>
            I am a cOntent
          </DialogContent>
          <DialogActions>
            <Button>1</Button>
            <Button>2</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  },
  () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setOpen(!open)}>Backdrop</Button>
        <Backdrop open={open}>
          <Button onClick={() => setOpen(!open)}>Arrow</Button>
        </Backdrop>
        <Alert>
          <AlertTitle>123</AlertTitle>
          this is a alert
        </Alert>
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Empty"
          minRows={3}
          style={{ width: "100%" }}
        />
      </div>
    );
  },
  () => {
    return (
      <div>
        <Tooltip title={123123}>
          <Button>Arrow</Button>
        </Tooltip>
        <Paper variant="outlined" square>
          <Typography variant="subtitle1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </Paper>
        <Accordion>
          <AccordionSummary>1</AccordionSummary>
          <AccordionDetails>12</AccordionDetails>
        </Accordion>
      </div>
    );
  },
  () => {
    return (
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
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
            <ListItemText secondary={124124124}>My custom</ListItemText>
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

interface tableData {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

const rows: Array<tableData> = [
  {
    name: "string",
    calories: 123,
    fat: 123,
    carbs: 43,
    protein: 54,
  },
  {
    name: "string",
    calories: 123,
    fat: 123,
    carbs: 43,
    protein: 54,
  },
  {
    name: "string",
    calories: 123,
    fat: 123,
    carbs: 43,
    protein: 54,
  },
  {
    name: "string",
    calories: 123,
    fat: 123,
    carbs: 43,
    protein: 54,
  },
];
export default App;
