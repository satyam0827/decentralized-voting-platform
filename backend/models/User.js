import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    nameOfParty:{
        type: String,
        required: true
    },
    logo:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

const export  User = mongoose.model('user', userSchema)
