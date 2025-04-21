const express=require('express')
const UserSchema=require('../models/Usermodel')
const bcrypt=require('bcrypt')

const router=express.Router()


router.get('/get-user',(req,res)=>{
    res.send("API IS RUNNING")
})

router.post('/add-user',async(req,res)=>{
    const {Username,email,Password}=req.body
    try{ 
        if(!Username){
            res.status(500).json({error:'Username cannot be empty'})
        }
        if(!email){
            res.status(500).json({error:'Email cannot be empty'})
        }
        if(!Username){
            res.status(500).json({error:'Password length Should be greater than 8 or less than or equal to 16'})
        }
        
        const Email=await UserSchema.findOne({email})
        if(Email){
            res.status(400).json({message:"User Already Exist"})
        }

        const hashp=await bcrypt.hash({Password})
        const newUser=await UserSchema.create
        ({
          Username,
          email,
          Password:hashp 
        })

        res.status(200).json({message:"User Registerd Succesfully",User:newUser})
    }
    catch(error){
       res.status(500).json({error:"Error In Server"})

    }
})

module.exports=router