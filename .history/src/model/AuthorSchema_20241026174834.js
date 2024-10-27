import mongoose from "mongoose";

export const author = new mongoose.Schema({

    name:String,
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Book',
        }
    ]
});