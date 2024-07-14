const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const userSchema =  new Schema({
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
    cart:{
        type:Array,
        default:[],
        required:true
    },
    isadmin:{
        type:Boolean
    },
    orders:{
        type:Array,
        default:[]
    },
    contact:{
        type:Number,
        required:true
    },
    picture:{
        type:String
    }
})

module.exports =  mongoose.model("user", userSchema)