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
        bookCard.appendChild(cardIsRead);

        const cardChangeIsRead = document.createElement('button');
        cardChangeIsRead.textContent = "Status";
        cardChangeIsRead.setAttribute("data-index", index);
        cardChangeIsRead.addEventListener("click", book.changeReadStatus);
        bookCard.appendChild(cardChangeIsRead);

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