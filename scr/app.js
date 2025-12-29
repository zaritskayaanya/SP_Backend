const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const originalUrl = require("./middlewares/orignalUrl");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

const handleError = () => {
  if (error) throw error;
  console.log("Connected MongoDb");
};

mongoose.connect(MONGO_URL).catch((error) => handleError(error));
// err => {
//     if (err) throw err;
//     console.log("Connected MongoDb")
// }

const app = express();

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, World!");
};
app.get("/", helloWorld);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.patch("/", (request, response) => {
  response.status(200);
  response.send("Hello from PATCH!");
});

app.delete("/", (request, response) => {
  response.status(200);
  response.send("Hello from DELETE!");
});

// app.get("/users/34", (request, response) => {
//     response.status(200);
//     response.send("User with id: 34")
// })

// app.get("/users/:id", (request, response) => {
//     const { id } = req.params;
//     response.status(200);
//     response.send(`User with id: ${id}`)
// })

app.use(cors());
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.use(originalUrl);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});