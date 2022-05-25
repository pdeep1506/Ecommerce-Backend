import express from "express";

import verifyToken from "../middleware/verifyToken.js";
import verifyTokenAdmin from "../middleware/verifyAdmin.js";
import { addOrder,updateOrder,deleteOrder, getAllOrder} from '../Controller/order.js'


const route = express.Router();


route.post('/',verifyToken,addOrder)
route.patch('/:id',verifyToken,updateOrder)
route.delete('/:id',verifyTokenAdmin,deleteOrder)
route.get('/',verifyTokenAdmin,getAllOrder)

export default route