import mongoose from "mongoose";
import dotenv from "dotenv";
import { categorySchema } from "../features/product/category.schema.js";

dotenv.config();
const DB_URL = 'mongodb://127.0.0.1:27017/Book';
const url = process.env.DB_URL;
export const connectUsingMongoose = async()=>{
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Mongodb connected using mongoose");
        addCategories()
    }catch(err){
        console.log("Error while connecting to db");
        console.log(err);
    }
}