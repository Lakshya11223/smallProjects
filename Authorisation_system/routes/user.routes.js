import express from 'express';
import { registeruser } from '../controller/user.controller.js';
import { verifyUser } from '../controller/user.controller.js';
import { login,getme,logout,resetpass, forgetpass } from '../controller/user.controller.js';
import isloggedin from '../middilewear/auth.middilewear.js';
const router = express.Router();

router.post('/register',registeruser);
router.get('/verify/:token',verifyUser);
router.post('/login',login);
router.post('/me',isloggedin,getme);
router.get('/logout',isloggedin,logout);
export default router;