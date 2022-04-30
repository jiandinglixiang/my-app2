import { Link, Route, Routes } from "react-router-dom";
import App from "../pages/app/App";
import FormInput from "../pages/formInput";

export default function () {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path="forward1" element={<FormInput />} />
      <Route path="forward2" element={<div>8888</div>}>
        <Route path="top" element={<FormInput />} />
        <Route index element={<Link to="forward2">go forward2</Link>} />
      </Route>
    </Routes>
  );
}
