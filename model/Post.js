const mongoose = require("mongoose");

const post_schema = mongoose.Schema({

    firstName: {

        type: String,
        required: true
    },

    lastName: {

        type: String,
        required: true
    },
    Email: {

        type: String
       
    },

    Telephone: {

        type: String
       
    },
   
    pets: {
        name: String,
        type : String,
        color: String
    },


    



})


 module.exports =   mongoose.model("Post", post_schema)