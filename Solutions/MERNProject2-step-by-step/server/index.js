var express = require('express');
var bodyParser = require('body-parser');
var dao = require("./mongo-dao");
var app = express();

app.use(bodyParser.json()); //Parse JSON body

/* setup static file server */
app.use("/", express.static(__dirname + '/..'));


/* process REST GET request for book List */
app.get("/books", (req, res) => {
  dao.findAllBooks(req.params.isbn, (err, books) => {
    if (books !== undefined) {
      //We have books
      console.log("index.js all books: " + books );
      res.send(books);
    } else {
      res.statusCode = 500;
      res.end();
    }
  });
});

/* process REST GET request for a Single book */
app.get("/books/:isbn", (req, res) => {
  dao.findBook(req.params.isbn, (err, book) => {
    if (book !== undefined) {
      //We have a book
      console.log("server get by isbn book: " + JSON.stringify(book));
      res.send(book);
    } else {
      res.statusCode = 404;
      res.end();
    }
  });
});

//update book
app.put("/books/:isbn", (req, res) => {
  if (req.params.isbn === undefined || req.body === undefined) {
    res.statusCode = 500;
    res.end();
    return;
  }
  dao.updateBook(req.params.isbn, req.body, (err) => {
    if (err !== null) {
      console.log("app.js app.put updateBook err: " + err);
      res.statusCode = 500;
    }
    res.end();
  });
});

// delete book
app.delete("/books/:isbn", (req, res) => {
  dao.deleteBook(req.params.isbn, (err) => {
    if (err !== null) {
      res.statusCode = 404;
    }
    res.end();
  });
});

console.log("Open a browser to http://localhost:3000 to view the application");

app.listen(3000);