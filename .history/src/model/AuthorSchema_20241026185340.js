import mongoose from "mongoose";

export const authorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
    },
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book',
        }
    ]
});