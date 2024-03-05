let myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const newBook = document.querySelector("#newBook");
const sectionLibrary = document.querySelector("#library");

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
    generateCard(myLibrary);
}

function generateCard(data) {
    sectionLibrary.innerHTML = '';

    data.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');

        const cardAuthor = document.createElement('div');
        cardAuthor.textContent = book.author;
        bookCard.appendChild(cardAuthor);

        const cardTitle = document.createElement('div');
        cardTitle.textContent = book.title;
        bookCard.appendChild(cardTitle);

        const cardPages = document.createElement('div');
        cardPages.textContent = book.pages;
        bookCard.appendChild(cardPages);

        const cardIsRead = document.createElement('div');
        cardIsRead.textContent = book.isRead;
        cardIsRead.classList.add("flex-item");

        const cardChangeIsRead = document.createElement('div');
        if (myLibrary[index].isRead === "Finished") {
            cardChangeIsRead.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>';
        } else {
            cardChangeIsRead.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>';
        }
        cardChangeIsRead.classList.add("read-status-btn");
        cardChangeIsRead.setAttribute("data-index", index);
        cardChangeIsRead.addEventListener("click", book.changeReadStatus);
        cardIsRead.appendChild(cardChangeIsRead);
        bookCard.appendChild(cardIsRead);

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.setAttribute("data-index", index);
        removeButton.addEventListener("click", removeBookFromLibrary);
        bookCard.appendChild(removeButton);
        sectionLibrary.appendChild(bookCard);
    });
}

//Show dialog
showButton.addEventListener("click", () => {
    dialog.showModal();
})

newBook.addEventListener("submit", (e) => {
    e.preventDefault();

    // get input elements
    const author = document.querySelector("#author");
    const title = document.querySelector("#title");
    const pages = document.querySelector("#pages");
    const isRead = document.querySelector('input[name="isRead"]:checked');

    addBookToLibrary(new Book(author.value, title.value, pages.value, isRead.value));
    printMyLibrary();
    author.value = '';
    title.value = '';
    pages.value = '';
})

Book.prototype.changeReadStatus = function () {
    const bookIndex = this.getAttribute("data-index");

    if (myLibrary[bookIndex].isRead === "Finished") {
        myLibrary[bookIndex].isRead = "Not Read";
    } else {
        myLibrary[bookIndex].isRead = "Finished";
    }

    printMyLibrary();
}

function removeBookFromLibrary() {
    const bookIndex = this.getAttribute("data-index");
    myLibrary.splice(bookIndex, 1);
    printMyLibrary();
}