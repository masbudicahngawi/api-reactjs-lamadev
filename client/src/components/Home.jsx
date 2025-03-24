import React from 'react';
import { useState, useEffect,} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import './Home.css';

export default function Home(){
	const [books, setBooks] = useState([]);

	useEffect(()=>{
		const getData = async ()=>{
			try{
				// const hasil = await axios.get("http://localhost:4044/books");
				const hasil = await axios.get("https://geni.masbudinulis.my.id/api/all");
				console.log(hasil);
				setBooks(hasil.data.data);
			}catch(err){
				console.log(err);
			}
		}

		getData();
	},[]);

	return(
		<div className='container'>
			{books.map((satuan, indeks)=>(
				<div key={satuan.id} className='kotak'>
					<h3 >{indeks + 1} - {satuan.nama}</h3>
					<p><i>{((satuan.deskripsi == null) || (satuan.deskripsi =="")) ? 'No Description ...' : satuan.deskripsi}</i></p>
				</div>))}
			<hr/>
			<Link to="/add">Add</Link>
		</div>
	);
}