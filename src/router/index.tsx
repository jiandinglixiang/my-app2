import { Link, Route, Routes } from "react-router-dom";
import App from "../pages/app/App";
import FormInput from "../pages/formInput";
import { Button } from "@mui/material";

function route() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <h1 style={{ textAlign: "center" }}>
              _____
              <Link to="link-show">
                <Button>link-show</Button>
              </Link>
              ______
            </h1>
            <App />
          </div>
        }
      />
      <Route
        path="link-show"
        element={
          <div>
            <h1>Link navigation</h1>
            <h1>
              <Link to="/forward2">forward2</Link>
            </h1>
            <h1>
              <Link to="/forward2/top">forward2/top</Link>
            </h1>
            <h1>
              <Link to="/">back</Link>
            </h1>
          </div>
        }
      />
      <Route path="forward2">
        <Route path="top" element={<App />} />
        <Route index element={<FormInput />} />
      </Route>
    </Routes>
  );
}

export default route;
