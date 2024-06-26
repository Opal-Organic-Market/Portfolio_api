import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { handleRequests, init, handleResponses } from "express-oas-generator";
import { router } from "./routes/allroutes.js";
//const expressOasGenerator = require('express-oas-generator');

dotenv.config();

const modelNames = mongoose.modelNames();

const app = express();
handleResponses(app, {});

app.use(express.json());
app.use(cors());

handleResponses(app);
app.listen(8080, () => {
  init(
    app,
    (spec) => {
      spec.info = {
        title: "Portfolio API Documentation",
        description: "API Documentation for Portfolio website",
      };
      spec.host = "portfolio-api-nmrs.onrender.com";
      spec.schemes = ["http", "https"];

      return spec;
    },
    "./swagger.json",
    60 * 1000,
    "api-docs",
    modelNames,
    ["skills","experiences","achievements","projects"],
    ["development"],
    true
  );

  console.log(
    'Server Listening on  8080'
  );
});

app.use(router);

handleRequests();