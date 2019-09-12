const express = require("express");
const http = require('http');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');



app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'));

//Database connection
require("./mongo")

//Models
require("./model/Post");

//MiddleWare

// var jsonParser = bodyParser.json()
http.createServer(app);
app.use(bodyParser.json())

const Post = mongoose.model("Post")


app.get("/clients/search", async(req,res) =>{
 try { 

const get = await Post.find({

})
res.send(get)

} catch(error){
    
    res.status(500) 
}
});


app.get("/clients/:client_uid", async (req, res) =>{

    try {

     const clients = await Post.findOne({ _id: req.params.client_uid})
     res.send(clients)
        
    } catch (error) {

    res.status(500);
        
    }
   
 });

 app.put("/clients/:client_uid", async(req, res) =>{

    try {

        const clients = await Post.findByIdAndUpdate({

            _id: req.params.client_uid

        }, req.body,{
            new:true,
            runValidators: true

        });
        res.send(clients)
        
    } catch (error) {
    
        res.status(500);
        
    }
 });

 app.delete("/clients/:client_uid", async(req, res) =>{

    try {

        const clients = await Post.findByIdAndDelete({

            _id: req.params.client_uid
        });

        res.send(clients)
        
    } catch (error) {

        res.status(500);
        
    }
 })



app.post("/clients", async(req, res) =>{
 
// console.log(req.body)
   res.send(req.body)
try {

    const clients = new Post();
    clients.firstName = req.body.firstName;
    clients.lastName = req.body.lastName;
    clients.Email = req.body.Email;
    clients.Telephone = req.body.Telephone;
    clients.pets = req.body.pets;

    await clients.save();
    res.send(clients)
    
} catch (error) {
    res.status(500)
    
}
   

})


const port = process.env.PORT || 8081;
app.listen(port,function(){
console.log("Server is running on 8081");

})
