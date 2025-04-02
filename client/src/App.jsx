import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tambah from "./components/Tambah";
import Books from "./components/Books";
import Contoh from "./components/Contoh";
import Sticky from "./components/Sticky";
import Detail from "./components/Detail";
import Kepala from "./components/Kepala";
import Gabung from "./components/Lab/Gabung";
import Data from "./components/Lab/Data";
import Menu2 from "./components/Menu2";
import Isi from "./components/Isi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gabung />} />
          <Route path="/tambah" element={<Tambah />} />
          <Route path="/books" element={<Books />} />
          <Route path="/contoh" element={<Contoh />} />
          <Route path="/sticky" element={<Sticky />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/gabung" element={<Gabung />} />
          <Route path="/data" element={<Data />} />
          <Route path="/menu2" element={<Menu2 />} />
          <Route path="/isi" element={<Isi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
