import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, ButtonGroup } from "@mui/material";
import sty from "./formInput.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  changeAsync4,
  combineChanges,
  increment1,
  increment2Async,
} from "../../redux/formSlice";

export default function () {
  const value = useAppSelector((state: RootState) => state.form.value);
  const asyncValue = useAppSelector(
    (state: RootState) => state.form.asyncValue
  );
  const combineValue = useAppSelector(
    (state: RootState) => state.form.combineValue
  );
  const asyncCombineValue = useAppSelector(
    (state: RootState) => state.form.asyncCombineValue
  );

  const dispatch = useAppDispatch();

  const [val, setVal] = useState(1);
  return (
    <Box className={sty.container}>
      <h1>Redux toolkit showing</h1>
      <Button variant="text" onClick={() => dispatch(increment1())}>
        修改 value /{value}/
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch(increment2Async(1000))}
      >
        异步 追加 asyncValue /{asyncValue}/
      </Button>
      <Button variant="contained" onClick={() => dispatch(combineChanges())}>
        组合 追加 combineValue /{combineValue}/
      </Button>
      <Button variant="contained" onClick={() => dispatch(changeAsync4())}>
        组合 异步 修改 asyncCombineValue / {asyncCombineValue} /
      </Button>
      <h1>Form showing</h1>
      <div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
      <div>
        <Button onClick={() => setVal(val + 1)} variant="contained">
          你好，世界
        </Button>
        <Link to={"/forward2"}> {val}321</Link>
      </div>
    </Box>
  );
}
