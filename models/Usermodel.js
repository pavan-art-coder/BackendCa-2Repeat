const mongoose=require('mongoose')

const Schema=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
          
    },
    email:{
        type:String,
        required:true,
    },
    Password:{
        type:Number,
        required:true,
        min:8,
        max:16,
    }

})

const UserSchema=mongoose.model('User',Schema)
module.exports=UserSchema;
