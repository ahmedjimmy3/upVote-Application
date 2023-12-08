import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
        phone:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            enum:['Male' , 'Female'],
            default:'Male'
        },
    },
    {timestamps:true}
)

const User = mongoose.model('User', userSchema) 

export default User