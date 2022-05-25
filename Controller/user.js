import bcryptjs from "bcryptjs"
import userModel from "../db/model/User.js"

export const updateUser = async(req,res)=>{
    // console.log(req.user.id)
    
   

    if(req.body.password){
       const  passwordEnc = bcryptjs.hashSync(req.body.password)
       try{
            const data = {...req.body,password:passwordEnc}
            
           const updateUser = await userModel.findByIdAndUpdate({_id:req.params.id},{ data})
           res.status(200).json({message:'User update Successfully'})
        } 
        catch(err){
            res.status(500).json({error:err})
        }
       
    }
    else{
        try{
                const updateUser = await userModel.findByIdAndUpdate({_id:req.params.id},req.body)
                res.status(200).json({message:'User update Successfully'})
        }
        catch(err){
            res.status(500).json({error:err})
        }
    }
}


export const deleteUser = async(req,res)=>{
    try{
        
        const deleteuser = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:'User delete Successfully'})
    }
    catch(err){
        res.status(500).json({error:err})
    }
}

export const getUserById = async(req,res)=>{
    try{

        const findUser = await userModel.findById(req.params.id)
        res.status(200).json({message:'User find in db',data:findUser})
    }
    catch(err){
        
        res.status(500).json({error:err})
    }
}

export const getUser = async(req,res)=>{
    const skip = req.query.skip || 0
    const limit =  req.query.limit || 5
    try{

        const findUser = await userModel.find().limit(limit).skip(skip)
        res.status(200).json({message:'Users find in db',data:findUser})
    }
    catch(err){
        
        res.status(500).json({error:err})
    }
}

