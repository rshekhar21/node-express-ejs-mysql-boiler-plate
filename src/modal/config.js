require('dotenv').config();
const mysql=require('mysql2');

const cs={
  port: '3306',
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSOWRD,
  connectionLimit: 10,
  queueLimit: 0
}

const pool=mysql.createPool(cs);

function runSql(sql, values=[]) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, rows, fields) => {
      if (err) return reject(err.message);
      return resolve(rows, fields)
    })
  })
}

module.exports={
  runSql
}