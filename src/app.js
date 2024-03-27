import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import {router} from "./routes/allroutes.js"
import cors from "cors";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 7020;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//adding routes
app.use(router);


//make database connection
try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database is connected sucessfully")
} catch (error) {
    console.log(error)
    
}
app.listen(PORT, () =>{
    console.log(`express app is runnning at ${PORT}`)
});