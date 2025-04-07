const bookService = require('../services/bookService');

// Create a book
exports.createBook = async (req, res) => {
  try {
    const { title, publication_year, author_id } = req.body;
    const newBook = await bookService.createBook(title, publication_year, author_id);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a book by ID
exports.getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by author
exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await bookService.getBooksByAuthor(req.params.authorId);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book
exports.updateBookPartial = async (req, res) => {
  try {
    const updates = req.body;
    const updatedBook = await bookService.updateBookPartial(req.params.id, updates);
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await bookService.deleteBook(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
