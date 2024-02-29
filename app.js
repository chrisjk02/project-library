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

// const book1 = new Book("Mary HK Choi", "Yolk", "600", "no");
// const book2 = new Book("Rick Riordan", "Percy Jackson and the Olympians", "350", "yes");
// addBookToLibrary(book1);
// addBookToLibrary(book2);
// printMyLibrary();

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const newBook = document.querySelector("#newBook");

//Show dialog
showButton.addEventListener("click", () => {
    dialog.showModal();
})

//close dialog
closeButton.addEventListener("click", () => {
    dialog.close();
})

newBook.addEventListener("submit", (e) => {
    e.preventDefault();

    // get input elements
    const author = document.querySelector("#author");
    const title = document.querySelector("#title");
    const pages = document.querySelector("#pages");
    const isRead = document.querySelector("#isRead");

    addBookToLibrary(new Book(author.value, title.value, pages.value, isRead.value));
    printMyLibrary();
    author.value = '';
    title.value = '';
    pages.value = '';
    isRead.value = '';
})