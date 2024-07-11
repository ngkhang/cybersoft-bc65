// Management router
import express from 'express';
import useRouter from './user.router.js';

const rootRouter = express.Router();

rootRouter.use('/user', useRouter);

export default rootRouter;
