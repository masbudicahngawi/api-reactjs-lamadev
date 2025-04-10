import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Mymenu from './Mymenu';

export default function Pencarian() {
    const [APIData, setAPIData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const judul = "Pencarian";

    useEffect(() => {
        axios.get("https://geni.masbudinulis.my.id/api/all")
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, []);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        // console.log(searchValue);

        if (searchInput !== "") {
            const filteredData = APIData.filter((item) => {
                // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase());
                return Object.values(item.nama).join('').toLowerCase().includes(searchValue.toLowerCase());
                // console.log(`search input : ${searchValue}`);
                // return item.nama.includes(searchValue);
            });
            setFilteredResults(filteredData);
            console.log(filteredData);
        } else {
            setFilteredResults(APIData);
        }
    }

    return (<>
        <Mymenu judul={judul} />
        <div className="p-4 sticky top-10 z-40">
            <input className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-green-200 focus:border-purple-500 mx-auto" type="text" placeholder="ketik kata kunci di sini..." onChange={(e) => searchItems(e.target.value)} />
        </div>
        <main className="relative flex flex-row justify-center overflow-y-auto gap-4 bg-slate-200 p-2 mx-auto flex-wrap">
            {/* {APIData.map(item => (
                <div key={item.id} className="px-6 py-4 m-4 border">{item.nama}</div>
            ))} */}
            {searchInput.length > 1 ? filteredResults.map(item => (
                <div
                    key={item.id}
                    className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
                >
                    <img
                        className="w-full"
                        src={
                            item.foto == "foto.png"
                                ? "/images/fali.jpg"
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
                    </div>
                </div>
            )) : APIData.map(item => (
                <div
                    key={item.id}
                    className="max-w-sm rounded overflow-hidden shadow-xl bg-white"
                >
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            <Link to="/data" state={item}>
                                {item.nama}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    </>)
}