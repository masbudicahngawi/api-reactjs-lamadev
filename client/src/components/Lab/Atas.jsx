import { Link } from "react-router-dom";
export default function Atas() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-cyan-950 py-1 text-white text-center">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-yellow-700">
              Point of Interests
            </a>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/">Beranda</Link>
              <Link to="/books">Buku-Buku</Link>
              <Link to="/tambah">Add Buku</Link>
              {/* <Link to="/contoh">Contoh</Link>
              <Link to="/sticky">Sticky</Link> */}
              <Link to="/gabung">Gabung</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
