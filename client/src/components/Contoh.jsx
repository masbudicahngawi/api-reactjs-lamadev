import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Contoh() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const hasil = await axios.get("http://localhost:4044/books");
        console.log(hasil);
        setBooks(hasil.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen">
        <header className="py-1 bg-blue-600 text-white text-center">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-yellow-700">
                MySimple API
              </a>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/">Beranda</Link>
                <Link to="/books">Buku-Buku</Link>
                <Link to="/tambah">Add Buku</Link>
                <Link to="/contoh">Contoh</Link>
                <Link to="/sticky">Sticky</Link>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1 overflow-y-auto p-5">
          {books.map((item, indeks) => (
            <div key={item.id}>
              <h1>
                {indeks + 1} {item.judul}
              </h1>
            </div>
          ))}
        </main>
        <footer className="py-5 bg-gray-700 text-center text-white">
          Tailwind is Awesome 😎
        </footer>
      </div>
    </div>
  );
}
