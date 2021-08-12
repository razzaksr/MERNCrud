const mongoose=require('mongoose')

const uri = "mongodb+srv://razak:mohamed@scriptmani.q77zz.mongodb.net/manikandan?retryWrites=true&w=majority";

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }, err=>{
    if(!err){console.log("Connected to mongodb")}
    else{console.log("Connection failed");}
})

require('./techie.model')