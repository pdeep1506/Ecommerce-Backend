import orderModel from '../db/model/Order.js'


export const addOrder = async(req,res)=>{
    try{
        const saveOrder = await orderModel.create(req.body)
        res.status(201).json({message:'added successfully',data:saveOrder})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const updateOrder = async(req,res)=>{
    try{
        const updateOrder = await orderModel.findByIdAndUpdate({_id:req.params.id},req.body)
        res.status(200).json({message:'update successfully',data:updateOrder})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const deleteOrder = async(req,res)=>{
    try{
        const dOrder = await orderModel.findByIdAndRemove({_id:req.params.id})
        res.status(200).json({message:'delete successfully',data:dOrder})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const getAllOrder = async(req,res)=>{
    try{
        const allOrder = await orderModel.find()
        res.status(200).json({message:'All order',data:allOrder})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}