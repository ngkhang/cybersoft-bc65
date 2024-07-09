import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Connect - Chuỗi kết nối
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3307',
  database: 'db_food',
});

// Khai báo middleware
app.use(express.json());  // Convert dữ liệu request về JSON

app.use(cors({
  origin: ["http://localhost:5500", "https://google.com"]
}));

// Khởi tạo server với port: 8080 tự định nghĩa
//  localhost:8080
app.listen(8080);

/*
  - Node > v20.11
    node --watch server.js

  - Node < v20 
    1. Install nodemon
    2. "start": "nodemon server.js"
*/

app.get('/demo/:idParam', (request, response) => {
  // Case 1: Truyền qua URL, luôn là string
  //  + query string: localhost:8080/demo/2?id=1&email=a@gmail.com
  let { id, email } = request.query;
  //  + query param,  localhost:8080/demo/1
  let { idParam } = request.params;
  // response.send({ id, email, idParam });

  // Case 2: Truyền qua body: json
  let { ma, ten, mail } = request.body;
  response.send({ ma, ten, mail });
  // Kiểu dữ liệu trả về tất cả, trừ NUMBER
});

// Query SQL
app.get('/get-food', (request, response) => {
  connection.query("SELECT * FROM food", (error, result) => {
    response.send(result);
  });
})
