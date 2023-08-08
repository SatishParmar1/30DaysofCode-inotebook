const mongoose = require('mongoose');
const {Schema} = mongoose;

const notesSchema =  new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },

    name:{
       type : String,
       required : true
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
module.exports = mongoose.model('user',notesSchema);
