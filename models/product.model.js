const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/scatch");

const productSchema = new Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String
    },
    panelcolor:{
        type:String
    },
    textcolor:{
        type:String
    }
})

module.exports = mongoose.model("product", productSchema )