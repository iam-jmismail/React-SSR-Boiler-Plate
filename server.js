require("dotenv").config();
import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import mongoose from "mongoose";
import { graphql } from "graphql";
import { graphqlHTTP } from "express-graphql";

// App Component
import App from "./src/App";

// Schema
import schema from "./src/data/schema";

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());

// Authentiation Routes
app.use("/auth", require("./routes"));

// API Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Static Folder
app.use(express.static("build/public"));

// Routes
app.get("*", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  fs.readFile("./index.html", "utf-8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      res.status(500).send("Oops, better luck next time!");
    }

    const html = data.replace(
      "<div id='root'>",
      "<div id='root'>" + content.toString() + "</div>"
    );
    res.send(html);
  });
});

// Connect to Database
mongoose.connect(
  process.env.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  },
  () => console.log("Connected to MongoDB successfully")
);

app.listen(port, () => {
  console.log(`Server running on PORT : ${port}`);
});
