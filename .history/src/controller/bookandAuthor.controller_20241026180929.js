import { mongoose } from "mongoose";
import { authorSchema } from "../model/AuthorSchema";
import { bookSchema } from "../model/BookSchema";
import express from "express";
//create model of the collection of Author
const Author = mongoose.model('Author',authorSchema);

//create model of the collection of Book
const Book = mongoose.model('Book',bookSchema);

const router = express.Router();

//create a new Author
router.post('/author',req,res)=>{

}