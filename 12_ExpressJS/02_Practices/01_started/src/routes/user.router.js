// Define API
import express from 'express';
import { createUser, getUser } from '../controller/user.controller.js';

// Express hỗ trợ định nghĩa routes: express.Router()
const useRouter = express.Router();

useRouter.get('/get-user', getUser);

useRouter.post('/create-user', createUser);

export default useRouter;
