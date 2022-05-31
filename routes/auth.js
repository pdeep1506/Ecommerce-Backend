import express from "express";
const router = express.Router();
import {register,login,logout} from'../Controller/auth.js'
import userModel from '../db/model/User.js'

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)

export default router