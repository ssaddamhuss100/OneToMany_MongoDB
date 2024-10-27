import { mongoose } from "mongoose";
import { authorSchema } from "../model/AuthorSchema";
import { bookSchema } from "../model/BookSchema";
import express from "express";
import { error } from "console";
//create model of the collection of Author
const Author = mongoose.model('Author',authorSchema);

//create model of the collection of Book
const Book = mongoose.model('Book',bookSchema);

const router = express.Router();

//create a new Author
router.post('/author', async(req,res)=>{
try {
         
     const author = new Author(req.body);
     await author.save();
     res.status(2001).json(author);
} catch (err) {
    res.status(400).json({error:error.message});
}


//add a book to an author
router.post('/author/:authorId/books',async (req,res)=>{
    const author = await Author.findById(req.param.authorId);
    if(!author){
        return res.status(404).json({message:'Author not found'});
    }
    const book new Book({...req.body,author:author._id});
    await book.save();
})
 









})