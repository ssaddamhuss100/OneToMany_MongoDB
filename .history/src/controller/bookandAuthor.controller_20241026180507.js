import { mongoose } from "mongoose";
import { authorSchema } from "../model/AuthorSchema";
import { bookSchema } from "../model/BookSchema";

//create model of the collection of Author
const Author = mongoose.model('Author',authorSchema);

//create model of the collection of Book
const Book = mongoose.model('Book',bookSchema);

//create Data

const createData = async()=>{
const author = new Author({name:'Saddam',age:30});
await author.save();
const book1 = Book({title:'Story one',author:'author_id'});
const book2 = new Book({ title: 'Story Two', author: author._id });


await book1.save();
await book2.save();

    // Add books to the author's book list
    author.books.push(book1._id);
    author.books.push(book2._id);
    await author.save();
};

createData();

const getAuthorWithBooks = async (authorId) => {
    const author = await Author.findById(authorId).populate('books');
    console.log(author);
};

// Replace 'AUTHOR_ID' with the actual ID of the author you want to fetch
getAuthorWithBooks('AUTHOR_ID');