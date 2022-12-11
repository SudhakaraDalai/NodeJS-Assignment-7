const express = require('express')
const app = express()
const bodyParser = require("body-parser");

const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", (req,res)=>{

 marioModel.find()
 .then(result=>{
    res.status(200).send(result)  
 })
.catch(err=>{console.log("error")})  
})


 app.get("/mario/:id", (req,res)=>{
//console.log(req.params.id)
marioModel.findById(req.params.id)
.then(doc=>{
  res.json(doc)
})
   .catch(err=>{
       console.log("err")
       res.status(400).json({"message":"error.message"}) 
    })
    })


 app.post("/mario", (req,res)=>{
        var post=new marioModel({
            name: "Liugi",
            weight:60
        })
      
 post.save((err,data)=>{
            if(err){
                console.log("error")
                res.status(400).send({"message": "either name or weight is missing"})
            }else{
               res.status(201).send(post)
            }
        })
    })

    app.patch("/mario/:id",async(req,res)=>{
       try{
           const _id=req.params.id;
const data=await marioModel.findByIdAndUpdate( _id, req.body,{new:true} );

        res.send(data)
    } catch(err){
      
            console.log("err")
            res.status(400).json({"message":"error.message"}) 
    }
    
    })
   
  app.delete("/mario/:id",async(req,res)=>{
      try{
     const deletechar=  await  marioModel.findByIdAndDelete(req.params.id)

res.status(200).send({message: 'character deleted'})
      }
      catch(error){
          console.log("error")
          res.status(400).send({message: "error.message"})

      }
  })  
 

module.exports = app;