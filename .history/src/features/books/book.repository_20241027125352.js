// No need to change prewritten code

// -----------pre-written code starts--------------------

import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'
import { reviewSchema } from './review.schema.js';

// creating model from schema.
const booksModel = mongoose.model('Book', bookSchema);

// creating model for review.
const reviewModel = mongoose.model('Review', reviewSchema);

export default class BookRepository {
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }
    
    async listBooksByGenre(genre) {
        const books = await booksModel.find({ genre });
        return books;
    }
    
    async updateBookAvailability(bookId, quantity) {
        
        console.log(bookId);
        const book = await booksModel.findById(bookId);
        
        // Calculate the new availableCopies value
        const newAvailableCopies = book.availableCopies + quantity;
        
        // Update the availableCopies field and save the book
        book.availableCopies = newAvailableCopies;
        
        await book.save();
        return book;
    }

    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndRemove(bookId);
        return deletedBook;
    }

    //------------------pre-written code ends--------------------------

    // Complete the function below
    
    // adding review to a particular book
    addReviewToBook = async (req, res) => {

        const { bookId } = req.params;
        const { text, rating } = req.body;
    
        try {
          const book = await this.bookRepository.getOne(bookId);
          if (!book) {
            res.status(404).send("book  not found.");
          } else {
            const review = await this.bookRepository.addReviewToBook(bookId, text, rating);
            res.status(200).json(review);
          }
    
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Falied to add review" });
        }
    
      }
}