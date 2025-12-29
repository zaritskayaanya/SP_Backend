const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const router = require("express").Router();

router.get("/books", getBooks);
router.get("/book", getBook);
router.post("/books/:book_id", createBook);
router.patch("/books/:book_id", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;