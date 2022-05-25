import express from "express";
import {addCart,updateCart,getById,getAll } from '../Controller/cart.js'
import verifyToken from "../middleware/verifyToken.js";
import verifyTokenAdmin from "../middleware/verifyAdmin.js";


const route = express.Router();


route.post('/',verifyTokenAdmin,addCart)
route.patch('/:id',verifyToken,updateCart)
route.get('/find/:userId',verifyToken,getById)
route.get('/',verifyToken,getAll)

export default route