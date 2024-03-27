import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import {router} from "./routes/allroutes.js"
import cors from "cors";
import { handleRequests, init, handleResponses } from "express-oas-generator";
//const expressOasGenerator = require('express-oas-generator');

dotenv.config();

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app, {});

dotenv.config();
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
    init(
        app,
        (spec) => {
          spec.info = {
            title: "Portfolio API Documentation",
            description: "API Documentation for Portfolio website",
          };
          spec.host = "localhost:8000";
          spec.schemes = ["http", "https"];
    
          return spec;
        },
        "./swagger.json",
        60 * 1000,
        "api-docs",
        modelNames,
        ["users", "skills"],
        ["development"],
        true
      );
    
      console.log(
        'Server Listening on  8080, Open http://localhost:8080/api-docs/'
      );
    });
    
    app.use(router);
    
    handleRequests();
    console.log(`express app is runnning at ${PORT}`)

