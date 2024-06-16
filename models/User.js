const {Schema, model} = require("mongoose")

const User = new Schema({
    name: {type:String, required:true},
    email:{type:String, required:true, unique:true},
    role:{type:String, required:true, default: "USER"}
})

module.exports = model("User", User);