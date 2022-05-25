
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
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
    ],
    amount:{ type:Number,required:true},
    address:{
        type:Object
    },
    status:{
        type:String,default:"pending"
    }
},{
    timestamps:true
})

const orderModel = new mongoose.model('order',OrderSchema)
export default orderModel