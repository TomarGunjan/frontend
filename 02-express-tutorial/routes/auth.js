const express = require("express")
const router = express.Router()

router.post("/",(req,res)=>{
    const {name} = req.body
    if(name){
    res.send(`Hello ${name}`)
    } else {
        res.status(401).send("Please provide a valid username")
    }
})

module.exports=router