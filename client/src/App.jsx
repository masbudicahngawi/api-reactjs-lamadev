import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tambah from "./components/Tambah";
import Books from "./components/Books";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
