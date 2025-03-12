import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"api-express"
});

app.listen(4044, ()=>{
	console.log("Conected to Backend !");
});

app.get("/", (req, res)=>{
	res.json("SELAMAT DATANG DI BACKEND");
});

app.get("/books", (req, res)=>{
	const qry = "SELECT * FROM mybooks";

	db.query(qry, (err, data)=>{
		if(err) return res.json(err);
		return res.json(data);
	});
});

app.post("/books", (req, res)=>{
	const qry = "INSERT INTO mybooks (`judul`, `pengarang`, `kategori`) VALUES (?)";
	// const values = ["Kasus-kasus Pengembangan Database", "Mohamad Amin", "teknologi"];
	const values = [
		req.body.judul,
		req.body.pengarang,
		req.body.kategori,
		];

	db.query(qry, [values], (err, data)=>{
		if(err) return res.json(err);
		return res.json("Data berhasil ditambahkan!");
	});
});