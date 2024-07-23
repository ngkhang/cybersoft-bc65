
import express from 'express';
import { signUp, login, loginFacebook, forgetCheckMail, forgetCheckCode } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/sign-up', signUp);
authRouter.post('/login', login);
authRouter.post('/login-facebook', loginFacebook);
authRouter.post('/forget/check-mail', forgetCheckMail);
authRouter.post('/forget/check-code', forgetCheckCode);

export default authRouter;