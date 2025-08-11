/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 * 
 * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */

class Book {
  title: string;
  author: string;
  yearPublished?: number;
  readonly ISBN: string;

  constructor(title: string, author: string, ISBN: string, yearPublished?: number) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.yearPublished = yearPublished;
  }
}

let book: Book = new Book('1984', 'George Orwell', '3548267459', 1949);
console.log(book);

function logBookDetails(book: Book): void {
  let details = `${book.title} by ${book.author}, ISBN: ${book.ISBN}`;
  if (book.yearPublished) {
    details += `, published in ${book.yearPublished}`;
  }
  console.log(details);
}
logBookDetails(book);

class EBook extends Book {
  fileSize: number;
  format: string;

  constructor(title: string, author: string, ISBN: string, fileSize: number, format: string, yearPublished?: number) {
    super(title, author, ISBN, yearPublished);

    this.fileSize = fileSize;
    this.format = format;
  }
}

let eBook: EBook = new EBook('1984', 'George Orwell', '3548267459', 1024, 'txt');
console.log(eBook);
logBookDetails(eBook);
eBook.ISBN = '3548267450';
