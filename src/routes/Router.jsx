import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "./Library";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
