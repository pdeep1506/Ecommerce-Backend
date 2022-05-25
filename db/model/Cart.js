
import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, required:true},
    produts:[
        {
            productid:{
                type:mongoose.Schema.Types.ObjectId
            },
            quantity:{
                type:Number,default:1
            }
        }
    ]
},{
    timestamps:true
})

const cartModel = new mongoose.model('cart',CartSchema)
export default cartModel