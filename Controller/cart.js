import cartModel from '../db/model/Cart.js'

export const addCart = async(req,res)=>{
    try{
        const addCart = await cartModel.create(req.body);
        res.status(200).json({message:'Successfully added',data:addCart})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}


export const updateCart = async(req,res)=>{
    try{
        const updateCart = await cartModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).json({message:'Successfully updated',data:updateCart})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const deleteCart = async(req,res)=>{
    try{
        const deleteCart = await cartModel.findByIdAndRemove({_id:req.params.id},);
        res.status(200).json({message:'Successfully removed',data:deleteCart})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const getById = async(req,res)=>{
    try{
        const getCart = await cartModel.findById({userId:req.params.id});
        res.status(200).json({message:'cart by user',data:getCart})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const getAll = async(req,res)=>{
    try{
        const getCart = await cartModel.find();
        res.status(200).json({message:'All cart',data:getCart})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}