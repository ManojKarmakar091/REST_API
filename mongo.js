const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://manojkarmkardb:Vicky8123@cluster0-gbbcx.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });