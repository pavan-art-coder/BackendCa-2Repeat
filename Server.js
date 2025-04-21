const express=require("express")
const router=require("./routes/routes")
const app=express()

app.use(express.json())
app.use('/User',router)

app.get('/',(req,res)=>{
    res.send("Heloo World")
})

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`Server is Running on the PORT ${PORT}`)
})