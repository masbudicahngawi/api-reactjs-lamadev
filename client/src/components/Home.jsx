import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // const hasil = await axios.get("http://localhost:4044/books");
        const hasil = await axios.get(
          "https://geni.masbudinulis.my.id/api/all"
        );
        console.log(hasil);
        setBooks(hasil.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center gap-4 bg-slate-300 p-2 mx-auto flex-wrap bg-[url(/images/mount.jpg)] mt-20">
        {books.map((satuan, indeks) => (
          <div
            key={satuan.id}
            className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
          >
            <img
              className="w-full"
              src={
                satuan.foto == "foto.png"
                  ? "/images/dieng.jpg"
                  : "https://gis.masbudinulis.my.id/uploaded_images/" +
                    satuan.foto
              }
              alt="Wonderfull Image"
            />
            {/* <video class="w-full" autoplay muted controls>
            <source
              src="/videos/sewu kutha-bossanova jawa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{satuan.nama}</div>
              <p className="text-gray-700 text-base">
                {satuan.deskripsi == null || satuan.deskripsi == ""
                  ? "No Description ..."
                  : satuan.deskripsi}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        ))}
        <hr />
        <Link to="/add">Add</Link>
      </div>
    </>
  );
}
