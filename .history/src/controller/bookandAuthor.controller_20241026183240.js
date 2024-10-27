import { mongoose } from "mongoose";
import { authorSchema } from "../model/AuthorSchema";
import { bookSchema } from "../model/BookSchema";
import express from "express";

//create model of the collection of Author
const Author = mongoose.model('Author',authorSchema);

//create model of the collection of Book
const Book = mongoose.model('Book',bookSchema);
//create a Router to route the https verbs
const router = express.Router();

// Create a new author
router.post('/authors', async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Add a book to an author
router.post('/authors/:authorId/books', async (req, res) => {
    try {
        const author = await Author.findById(req.params.authorId);
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }

        const book = new Book({ ...req.body, author: author._id });
        await book.save();

        author.books.push(book._id);
        await author.save();

        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Get the author with their books
router.get('/author/:authorId', async(req,res)=>{
    try {
        const author = await Author.findById(req.params.authorId).populate('books')
        if (!author) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;