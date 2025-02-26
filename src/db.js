import { createPool } from "mysql2/promise"; // Cambia createConnection por createPool
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";
export const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  waitForConnections: true, // Opcional: esperar conexiones si el pool está lleno
  connectionLimit: 10, // Opcional: límite de conexiones en el pool
  queueLimit: 0, // Opcional: límite de solicitudes en cola (0 = sin límite)
});
