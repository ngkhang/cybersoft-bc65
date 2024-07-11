import express from 'express';
import rootRouter from './routes/rootRouter.js';
import cors from 'cors';

const app = express();

// Connect - Chuỗi kết nối
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   port: '3307',
//   database: 'db_food',
// });

// Khai báo middleware
app.use(express.json());  // Convert dữ liệu request về JSON
app.use(cors());
app.use(rootRouter);

// Khởi tạo server với port: 8080 tự định nghĩa
//  localhost:8080
app.listen(8080);
