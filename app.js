const myLibrary = [];
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const newBook = document.querySelector("#newBook");
const sectionLibrary = document.querySelector("#library");
const deleteButton = document.querySelector(".deleteButton");
const xmlns = "http://www.w3.org/2000/svg";

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
    const cardHTML = generateCard(myLibrary);
}

function generateCard(data) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const authorText = document.createElement('div');
    const titleText = document.createElement('div');
    const pagesText = document.createElement('div');
    const isReadText = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const svgDelete = document.createElementNS(xmlns, "svg");
    svgDelete.setAttributeNS(null, "viewBox", "0 0 448 512");
    const path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, "d", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z");
    deleteBtn.classList.add("deleteButton");
    svgDelete.appendChild(path);
    deleteBtn.appendChild(svgDelete);

    data.forEach(element => {
        authorText.textContent = element.author;
        titleText.textContent = element.title;
        pagesText.textContent = element.pages + " pages";
        isReadText.textContent = element.isRead;
        newCard.append(authorText, titleText, pagesText, isReadText, deleteBtn);
    });

    sectionLibrary.appendChild(newCard);
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