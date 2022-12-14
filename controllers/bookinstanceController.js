const BookInstance = require('../models/bookinstance');
const Book = require('../models/book');

// Display list of all BookInstances.
exports.bookinstance_list = async (req, res) => {
  const bookinstance_list = await BookInstance.find().populate('book');
  res.render('bookinstance_list', {
    title: 'Book Instance List',
    bookinstance_list,
  });
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = async (req, res) => {
  const bookinstance = await BookInstance.findById(req.params.id).populate(
    'book'
  );
  res.render('bookinstance_detail', {
    title: `Copy: ${bookinstance.book.title}`,
    bookinstance,
  });
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = async (req, res) => {
  const books = await Book.find();
  res.render('bookinstance_form', {
    title: 'Create BookInstance',
    book_list: books,
  });
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = async (req, res) => {
  const { book, imprint, status, due_back } = req.body;
  // const books = await Book.find();
  const bookinstance = await BookInstance.create({
    book,
    imprint,
    status,
    due_back,
  });
  res.redirect(bookinstance.url);
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance update POST');
};
