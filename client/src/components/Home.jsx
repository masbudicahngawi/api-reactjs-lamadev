import React from 'react';
import { useState, useEffect,} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

export default function Home(){
	const [books, setBooks] = useState([]);

	useEffect(()=>{
		const getData = async ()=>{
			try{
				const hasil = await axios.get("http://localhost:4044/books");
				console.log(hasil);
				setBooks(hasil.data);
			}catch(err){
				console.log(err);
			}
		}

		getData();
	},[]);

	return(
		<div>
			{books.map(satuan=>(
				<div key={satuan.id}>
					<h3 >{satuan.judul}</h3>
					<p><i>{satuan.pengarang}</i></p>
				</div>))}
			<hr/>
			<Link to="/add">Add</Link>
		</div>
	);
}