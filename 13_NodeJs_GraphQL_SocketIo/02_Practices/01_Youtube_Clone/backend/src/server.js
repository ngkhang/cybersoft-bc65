import express from 'express';
import cors from 'cors';

import rootRouter from './routes/root.router.js';

const app = express();

// Khai báo middleware
app.use(express.static('.')); // Xác định load thư mục tài nguyên
app.use(express.json());  // Convert dữ liệu request về json
app.use(cors());          // Cho phép domain có thể truy cập
app.use(rootRouter);      // Kết nối với router chính

// Khởi tạo server với port: 8080 tự định nghĩa - localhost:8080
app.listen(8080);
