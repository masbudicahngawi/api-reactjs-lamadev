import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sticky() {
  const [pois, setPois] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const hasil = await axios.get(
          "https://geni.masbudinulis.my.id/api/all"
        );

        console.log(hasil);

        setPois(hasil.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col h-screen bg-slate-300">
        <header className="py-1 bg-blue-600 text-white text-center">
          <nav className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-yellow-700">
                My Point of Interest
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
          <h1 className="text-3xl font-bold text-center">
            Daftar Point of Interest
          </h1>
        </div>
        <main className="flex flex-row justify-center overflow-y-auto gap-4 bg-slate-300 p-2 mx-auto flex-wrap">
          {pois.map((item, indeks) => (
            <div
              key={item.id}
              className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
            >
              <img
                className="w-full"
                src={
                  item.foto == "foto.png"
                    ? "/images/dieng.jpg"
                    : "https://gis.masbudinulis.my.id/uploaded_images/" +
                      item.foto
                }
                alt="Wonderfull Image"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.nama}</div>
                {/* <p className="text-gray-700 text-base">
                  {item.deskripsi == null || item.deskripsi == ""
                    ? "No Description ..."
                    : item.deskripsi}
                </p> */}
              </div>
              {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div> */}
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
