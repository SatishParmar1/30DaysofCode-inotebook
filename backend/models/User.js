const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema =  new Schema({
    name:{
       type : String,
       required : true
    },

    email:{
        type:String,
        reqruired :true,
        unique: true 
    },

    password:{
        type:String,
        reqruired :true,
        
    },

    date:{
        type:Date,
        default:Date.now
    },
});
module.exports = mongoose.model('user',UserSchema);
