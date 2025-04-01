import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-yellow-700 fixed top-0 w-full shadow-md mb-4">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gray-800">
              MySimple API
            </a>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/">Beranda</Link>
              <Link to="/books">Buku-Buku</Link>
              <Link to="/tambah">Add Buku</Link>
              {/* <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign Up</a> */}
            </div>
            {/* <div className="md:hidden flex items-center">
                    <button className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div> */}
          </div>
          {/* <div className="mt-4">
                <div className="flex items-center space-x-2">
                    <input type="search" placeholder="Search" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600 w-full"/>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Search</button>
                </div>
            </div> */}
        </nav>
      </header>
    </>
  );
}
