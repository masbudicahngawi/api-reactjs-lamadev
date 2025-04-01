import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tambah from "./components/Tambah";
import Books from "./components/Books";
import Contoh from "./components/Contoh";
import Sticky from "./components/Sticky";
import Detail from "./components/Detail";
import Kepala from "./components/Kepala";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Kepala />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contoh" element={<Contoh />} />
          <Route path="/sticky" element={<Sticky />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
