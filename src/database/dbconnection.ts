import mysql from 'mysql2/promise';


// export const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: process.env.DB_PASSWORD,
//     port: 3306,
//     database: 'test_users',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

export const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'test_users'
});

export default pool;