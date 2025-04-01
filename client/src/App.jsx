import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tambah from "./components/Tambah";
import Books from "./components/Books";
import Contoh from "./components/Contoh";
import Sticky from "./components/Sticky";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contoh" element={<Contoh />} />
          <Route path="/sticky" element={<Sticky />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
