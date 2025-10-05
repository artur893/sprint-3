const library = { name: "Półka", books: [] };

const book1 = {
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  yearOfPublication: 1954,
};

const book2 = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  yearOfPublication: 1937,
};

const book3 = {
  title: "The Shining",
  author: "Stephen King",
  yearOfPublication: 1977,
};

library.books.push(book1, book2, book3);

const title1 = library.books[0].title;
const author1 = library.books[0].author;
const yearOfPublication1 = library.books[0].yearOfPublication;

const title2 = library.books[1].title;
const author2 = library.books[1].author;
const yearOfPublication2 = library.books[1].yearOfPublication;

const title3 = library.books[2].title;
const author3 = library.books[2].author;
const yearOfPublication3 = library.books[2].yearOfPublication;

const bookInfo1 = `Tytuł: ${title1}, Autor: ${author1}, Rok wydania: ${yearOfPublication1}.`;
const bookInfo2 = `Tytuł: ${title2}, Autor: ${author2}, Rok wydania: ${yearOfPublication2}.`;
const bookInfo3 = `Tytuł: ${title3}, Autor: ${author3}, Rok wydania: ${yearOfPublication3}.`;

let oldestBook = "";

if (
  library.books[0].yearOfPublication < library.books[1].yearOfPublication &&
  library.books[0].yearOfPublication < library.books[2].yearOfPublication
) {
  oldestBook = library.books[0].title;
} else if (
  library.books[1].yearOfPublication < library.books[0].yearOfPublication &&
  library.books[1].yearOfPublication < library.books[2].yearOfPublication
) {
  oldestBook = library.books[1].title;
} else {
  oldestBook = library.books[2].title;
}

const libraryInfo = `Biblioteka ${library.name} zawiera książki: ${title1}, ${title2}, ${title3}. Najstarsza książka: ${oldestBook}.`;
