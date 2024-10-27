import mongoose from "mongoose";

const author = new mongoose.Schema({

    name:String,
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book',
        }
    ]
})