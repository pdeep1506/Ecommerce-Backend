import userModel from '../db/model/User.js'

import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'




export const register = async(req,res,next)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    const exictinguser = await userModel.findOne({email,username})
 
    
    if(!exictinguser){
        try{
            const hashpassword = bcryptjs.hashSync(password)
            const user = {username:username,email:email,password:hashpassword}
            const createUser = await userModel.create(user)
            res.status(201).json({message:'User created successfully', data: createUser})
        }
        catch(err){
            
            if(err['keyPattern']['username'] === 1){
                res.status(401).json({message:'User with this username is already in db'})
            }
            else{    
                res.status(500).json({message:err})
            }
        }
    }
    else{
        res.status(401).json({message:'User with this email is already in db'})
    }
}


export const login = async(req,res)=>{
    const username = req.body.username
    const password = req.body.password

    const exictinguser  = await userModel.findOne({username:username})
    if(exictinguser){
        const decryptPassword = bcryptjs.compareSync(password,exictinguser.password)
        if(decryptPassword){
            const jwt = jsonwebtoken.sign({
                id:exictinguser._id, isAdmin: exictinguser.isAdmin
            },process.env.JWT_KEY,{ 
                expiresIn:'2d'
            })
            res.cookie('jwt',jwt)
            res.status(200).json({message:'Login Successfully'})
        }
        else{
            res.status(401).json({message:'Wrong credentials!'})
        }
        
    }
    else{
        res.status(401).json({message:'User with this user name is not in db'})
    }
}


export const logout = async(req,res)=>{
    res.clearCookie('jwt');
    res.status(200).json({message:'logout successfully'})
}