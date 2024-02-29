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

function printMyLibrary() {
    console.table(myLibrary);
}

const book1 = new Book("Mary HK Choi", "Yolk", "600", "no");
const book2 = new Book("Rick Riordan", "Percy Jackson and the Olympians", "350", "yes");
addBookToLibrary(book1);
addBookToLibrary(book2);
printMyLibrary();

