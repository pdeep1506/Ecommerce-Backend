
import productModel from  '../db/model/Product.js'

export const createProduct = async(req,res)=>{
    try{
        const saveProduct = await productModel.create(req.body);
        res.status(200).json({message:'Product created',data:saveProduct})
    }
    catch(err){
    
        res.status(500).json(err);
    }
}

export const updateProduct = async(req,res)=>{
    try{
        const updateproduct = await productModel.findByIdAndUpdate({_id:req.params.id},req.body)
           res.status(200).json({message:'product update Successfully'})
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        const deleteProduct = await productModel.findByIdAndRemove(req.params.id)
           res.status(200).json({message:'product Delete Successfully'})
    }
    catch(err){
        res.status(500).json(err);
    }
}

export const getProductById = async(req,res)=>{
    try{
        const getProduct = await productModel.findById(req.params.id)
           res.status(200).json({message:'product find',data:getProduct})
    }
    catch(err){
        res.status(500).json(err);
    }
}
export const getProduct = async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category
    try{

        if(qNew){
            const getProduct = await productModel.find({}).sort({createdAt:-1})
            res.status(200).json({message:'product find',data:getProduct})
        }
        else if(qCategory){
            const getProduct = await productModel.find({categories:{$in:[qCategory]}})
            res.status(200).json({message:'product find by category',data:getProduct})
        }
        else{
            
            const getProduct = await productModel.find({})
            res.status(200).json({message:'product find',data:getProduct})
        }
    }
    catch(err){
        res.status(500).json(err);
    }
}