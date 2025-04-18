import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'maglev.proxy.rlwy.net',
  user: 'root',
  password: process.env.DB_PASSWORD,
  port: 51460,
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

