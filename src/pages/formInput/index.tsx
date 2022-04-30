import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function () {
  const [val, setVal] = useState(1);
  return (
    <div className="App">
      <Button onClick={() => setVal(val + 1)} variant="contained">
        你好，世界
      </Button>
      <Link to={"/asd"}> {val}321</Link>
      {val % 2 === 0 && <Navigate to="/dashboard" replace={true} />}
    </div>
  );
}
