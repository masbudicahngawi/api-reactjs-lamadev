import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

import Mymenu from "./Mymenu";

export default function Books() {
  const judul = "My Books";
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
    <>
      <Mymenu judul={judul} />
      <div className="flex flex-row justify-center overflow-y-auto gap-4 bg-slate-300 p-2 mx-auto flex-wrap">
        {books.map((item, indeks) => (
          <article
            key={indeks}
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-0.5xl px-8 pb-8 pt-40 max-w-sm mx-auto shadow-xl"
          >
            <img
              src="/images/buku.jpg"
              alt="University of Southern California"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">
              {item.judul}
            </h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {item.pengarang}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
