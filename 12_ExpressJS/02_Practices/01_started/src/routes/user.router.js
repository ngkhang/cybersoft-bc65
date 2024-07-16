// Define API
import express from 'express';
import { createUser, getUser } from '../controller/user.controller.js';

// Express hỗ trợ định nghĩa routes: express.Router()
const userRouter = express.Router();

userRouter.get('/get-user', getUser);
/*
Truyền dữ liệu 2 cách:
  - Thông qua URL - luôn là kiểu string
    - Query string: router: 'user/get-user'
      localhost:8080/user/get-user/email=a@gmail.com
      let { email } = req.query;

    - Query Params: router: 'user/get-user/:userId'
      localhost:8080/user/get-user/12
      let { userId } = req.params;

  - Thông qua body (json): không xuất hiện trên URL
    let { ma, ten, email } = res.body
*/

userRouter.post('/create-user', createUser);

export default userRouter;
