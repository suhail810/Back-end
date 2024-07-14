const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const ownerSchema =  new Schema({
    fullname: {
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:trusted
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    products:{
        type:Array,
        default:0
    },
    picture:{
        type:String
    },
    gstin:{
        type:String
    }
})

module.exports =  mongoose.model("owner", ownerSchema)