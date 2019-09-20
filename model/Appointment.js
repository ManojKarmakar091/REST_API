const mongoose = require("mongoose");

const post_schema = mongoose.Schema({

  
    appt_link_id: {

        type: String,
        required: true
    },

    appt_type_id: {

        type: String,
        required: true
    },
    appt_sub_type_id: {

        type: String
       
    },

    patient_id: {

        type: String
       
    },
   
    client_id: {
        
        type : String
    },

    appt_start_date: {
        
        type : String
    },
    appt_end_date: {
        
        type : String
    },
    doctor_id: {
        
        type : String
    }


})



 module.exports =   mongoose.model("Appointment", post_schema)