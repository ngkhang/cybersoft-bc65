import express from 'express';
import cors from 'cors';
import rootRouter from './routes/rootRouter.js';

const app = express();

// Khai báo middleware: use()
app.use(express.json());  // Convert dữ liệu request về JSON
app.use(cors());          // Cho phép domain có thể truy cập
app.use(rootRouter);      // Kết nối với router chính

// Khởi tạo server với port: 8080 tự định nghĩa
//  localhost:8080
app.listen(8080);
