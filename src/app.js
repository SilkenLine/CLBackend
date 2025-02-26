import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";
const app = express();

app.get("/ping", async (req, res) => {
  const result = await pool.query(`SELECT "HELLO WORLD" as RESULT`);
  console.log(result);
  res.send("benvenido");
});

app.get("/todo", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM productos");
  res.json(rows);
});

app.listen(PORT);
console.log("server on port 3000");
