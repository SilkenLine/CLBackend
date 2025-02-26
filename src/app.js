import express from "express";
import { pool } from "./db.js";
import { PORT } from "./config.js";

const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.get("/ping", async (req, res) => {
  try {
    const [result] = await pool.query(`SELECT "HELLO WORLD" as RESULT`);
    console.log(result);
    res.json({ message: "benvenido", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM productos");
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Puerto dinámico
});
