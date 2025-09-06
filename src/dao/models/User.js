const mongoose = require('mongoose');

const collection = 'Users_Mock';

const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    pets:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Pets_Mock'
    }]
})

const userModel = mongoose.model(collection,schema);

module.exports = userModel;