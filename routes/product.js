import express from "express";
const route = express.Router()
import verifyToken from "../middleware/verifyToken.js";
import verifyTokenAdmin from "../middleware/verifyAdmin.js";
import {createProduct,updateProduct,deleteProduct,getProduct,getProductById } from '../Controller/product.js'

// Create Product

route.post('/',verifyTokenAdmin,createProduct)
route.patch('/:id',verifyTokenAdmin,updateProduct)
route.delete('/:id',verifyTokenAdmin,deleteProduct)

route.get('/:id',verifyTokenAdmin,getProductById)
route.get('/',verifyTokenAdmin,getProduct)

export default route