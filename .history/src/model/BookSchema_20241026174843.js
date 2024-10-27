import mongoose from "mongoose";

export const bookSchema = new mongoose.Schema({
    title:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Author',
    }
});