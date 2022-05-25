

import jsonwebtoken from "jsonwebtoken";

const verifyToken = (req,res,next)=>{
    const jwt = req.cookies['jwt']

    if(jwt){
        jsonwebtoken.verify(jwt,process.env.JWT_KEY,(err,user)=>{
            if(err){
                console.log(err)
                res.status(403).json('Token is not valid')
            }
            else{
                req.user = user;
                
                next();
            }
        })
    }
    else{
        return res.status(401).json({message:'you are not authorized'})
    }
}
export default verifyToken