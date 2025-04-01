import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Tambah() {
  const [item, setItem] = useState({
    judul: "",
    pengarang: "",
    kategori: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(item);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4044/books", item);
      navigate("/books");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20">
      <Header />
      <h1>Add a New Book</h1>
      <hr />
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Judul
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Judul Buku"
              name="judul"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Pengarang
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              placeholder="Pengarang"
              name="pengarang"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Kategori
            </label>
          </div>
          <div className="md:w-2/3">
            {/* <select id="kategori" name="kategori" onChange={handleChange}> */}
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="kategori"
              name="kategori"
              onChange={handleChange}
              required
            >
              <option value="">==Pilih Kategori==</option>
              <option value="bahasa">Bahasa</option>
              <option value="pengembangan">Pengembangan</option>
              <option value="teknologi">Teknologi</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleClick}
            >
              Simpan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
