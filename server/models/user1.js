var mongoose=require('mongoose');




var A=mongoose.model('User1',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});




module.exports={A};