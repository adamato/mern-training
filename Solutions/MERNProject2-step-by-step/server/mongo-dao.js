var mongodb = require("mongodb");
var dbPool; //Connection pool
var url = "mongodb://localhost:27017/biblio_db";

mongodb.MongoClient.connect(url, function(err, db) {
    if (err === null) {
        dbPool = db; //Open the pool
    }
});

module.exports.findBook = function(isbn, callback) {
  var col = dbPool.collection("books");

  col.find({isbn: isbn}, { _id: 0})
    .toArray((err, books) => {
      if (err === null && books.length > 0) {
        callback(null, books[0]);
      } else {
        callback("Failed to find book");
      }
  });
};

module.exports.updateBook = function(isbn, book, callback) {
  delete book._id;
  console.log("\ndao updateBook book: " + JSON.stringify(book));
  var col = dbPool.collection("books");
  
  col.update(
    {isbn: isbn},
    {$set: book},
    {upsert: true},
    callback);
};

module.exports.findAllBooks = function(isbn, callback) {
  var col = dbPool.collection("books");
  console.log("data_access-mongo Books (0): " );
  col.find()
    .toArray((err, books) => {
      console.log("data_access-mongo Books (0): err: " + err );
      if (err === null) {
        console.log("data_access-mongo Books: " + JSON.stringify(books) );
        callback(null, books);
      } else {
        callback("Failed to find books", undefined);
      }
  });
};

module.exports.deleteBook = function(isbn, callback) {
  var col = dbPool.collection("books");

  col.remove({isbn: isbn}, function(err, result) {
      if (result !== null && result.result.n == 0) {
        callback("Book not found");
      } else {
        callback(err); // pass through error or null
      }
  });
};