import { Link } from "react-router-dom";
import Banyak from "./Isi";
import Books from "./Books";

export default function Kepala() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-300">
        <header className="py-1 bg-blue-600 text-white text-center">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-yellow-700">
                The Books
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
        <div className="bg-slate-300 text-pretty mx-auto m-2">
          <h1 className="text-3xl font-bold text-center">Daftar Buku</h1>
        </div>
        <main className="flex flex-row justify-center overflow-y-auto gap-4 bg-slate-300 p-2 mx-auto flex-wrap">
          <Books />
        </main>
        <footer className="py-2 bg-gray-700 text-center text-white">
          Tailwind is Awesome 😎
        </footer>
      </div>
    </>
  );
}
