import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Add() {
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
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20">
      <Header />
      <h1>Add a New Book</h1>
      <input
        type="text"
        placeholder="Judul"
        name="judul"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Pengarang"
        name="pengarang"
        onChange={handleChange}
        required
      />
      <select id="kategori" name="kategori" onChange={handleChange}>
        <option value="">==Pilih Kategori==</option>
        <option value="bahasa">Bahasa</option>
        <option value="pengembangan">Pengembangan</option>
        <option value="teknologi">Teknologi</option>
      </select>
      <button onClick={handleClick}>Simpan</button>
    </div>
  );
}
