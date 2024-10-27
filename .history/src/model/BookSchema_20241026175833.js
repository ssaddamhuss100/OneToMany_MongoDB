import mongoose from "mongoose";

export const bookSchema = const bookSchema = new mongoose.Schema({
    title: 
    {
         type: String,
         required: true
         },
    author:{
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Author'
         }
});

