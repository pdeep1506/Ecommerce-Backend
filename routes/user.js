import express from "express";
import {updateUser,deleteUser,getUserById,getUser} from '../Controller/user.js'

import verifyToken from "../middleware/verifyToken.js";
import verifyTokenAdmin from "../middleware/verifyAdmin.js";
const router = express.Router();

router.patch('/:id',verifyToken,updateUser)
router.delete('/:id',verifyToken,deleteUser)
router.get('/:id',verifyTokenAdmin,getUserById)
router.get('/',verifyTokenAdmin,getUser)


export default router