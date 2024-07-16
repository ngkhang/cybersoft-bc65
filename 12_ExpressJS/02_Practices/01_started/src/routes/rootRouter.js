// Management router
import express from 'express';
import userRouter from './user.router.js';

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);

export default rootRouter;
