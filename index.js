const express = require("express");
const http = require('http');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const cors = require("cors");

app.use(cors());

app.get('/', function(req, res){
    //res.sendfile('index.html');
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello");
});



app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'));

//Database connection
require("./mongo");

//Models
require("./model/Post");
require("./model/Appointment");

//MiddleWare

var jsonParser = bodyParser.json()
http.createServer(app);
app.use(bodyParser.json())

const Post = mongoose.model("Post")
const Appointment = mongoose.model("Appointment")


app.get("/clients/search", async(req,res) =>{
    
 try { 

const get = await Post.find({

})
res.send(get)
// console.log(res.pets);
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

app.get('/', (req, res) => {

    console.log(req.body) 
} );   

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
    res.status(500);
    
}
   

})


app.get("/appointments/search", async(req,res) =>{
    
    try { 
   
   const get = await Appointment.find({
   
   })
   res.send(get)
//    console.log(res.pets);
   } catch(error){
       
       res.status(500) 
   }
   });

   app.post("/appointments", async(req, res) =>{
 
    // console.log(req.body)
       res.send(req.body)
    try {
    
        const appointments = new Appointment();
        appointments.appt_link_id = req.body.appt_link_id;
        appointments.appt_type_id = req.body.appt_type_id;
        appointments.appt_sub_type_id = req.body.appt_sub_type_id;
        appointments.patient_id = req.body.patient_id;
        appointments.client_id = req.body.client_id;
        appointments.appt_start_date = req.body.appt_start_date;
        appointments.appt_end_date = req.body.appt_end_date;
        appointments.doctor_id = req.body.doctor_id;
    
        await appointments.save();
        res.send(appointments)
        
    } catch (error) {
        res.status(500);
        
    }
       
    
    })


const port = process.env.PORT || 5001;
app.listen(port,function(){
console.log("Server is running on 5001");



})
