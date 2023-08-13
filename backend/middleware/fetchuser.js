
var jwt = require('jsonwebtoken');
const JWT_SECRET =  "hello dosto";
const fetchuser =(req,res,next)=>{
   const token = req.header('auth-token');
   if(!token){
    res.status(401).send({errror : "please authenticate using  valid token"})
   }
   
   try {
    const data = jwt.verify(token,JWT_SECRET);
    req.user = data.user;
    next();
   } catch (error) {
    res.status(401).send({errror : "please authenticate using  valid token"})
   }
   
}

module.exports = fetchuser;