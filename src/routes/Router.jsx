import { BrowserRouter, Routes, Route } from "react-router-dom";
import Book from "./Book";
import BookShelf from "./BookShelf";
import Library from "./Library";
import RandomStack from "./RandomStack";
import Search from "./Search";
import YourFinds from "./YourFinds";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/random-stack" element={<RandomStack />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book-shelf" element={<BookShelf />} />
        <Route path="/book" element={<Book />} />
        <Route path="/your-finds" element={<YourFinds />} />
      </Routes>
      <Routes></Routes>
    </BrowserRouter>
  );
}
export default Router;
