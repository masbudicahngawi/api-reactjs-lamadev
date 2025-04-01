import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Books() {
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
    <div className="mt-20">
      <Header />
      <hr />
      {books.map((item, indeks) => (
        <div key={item.id}>
          <h1>
            {indeks + 1} {item.judul}
          </h1>
        </div>
      ))}
    </div>
  );
}
