import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Tengah() {
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
    <>
      <div className="sticky top-16 z-40 bg-white py-2">
        <h1 className="text-3xl font-bold text-center">
          Daftar Point of Interest
        </h1>
      </div>
      <main className="relative flex flex-row justify-center overflow-y-auto gap-4 bg-slate-300 p-2 mx-auto flex-wrap">
        {pois.length > 0 ? (
          pois.map((item, indeks) => (
            <div
              key={indeks}
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
                <div className="font-bold text-xl mb-2">
                  <Link to="/data" state={item}>
                    {item.nama}
                  </Link>
                </div>
                {/* <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis id quae nihil ea, sunt consequuntur.
              </p> */}
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
    </>
  );
}
