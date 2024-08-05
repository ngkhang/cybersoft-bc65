import express from 'express';
import userRouter from './user.router.js';
import videoRouter from './video.router.js';

const rootRouter = express.Router();

rootRouter.use('/user', userRouter);
rootRouter.use('/video', videoRouter);

export default rootRouter;
