const myLibrary = [];

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

const book1 = new Book("Mary HK Choi", "Yolk", "600", "no");
addBookToLibrary(book1);
console.log(myLibrary);