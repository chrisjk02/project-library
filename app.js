const myLibrary = [];
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
    const cardHTML = generateCard(myLibrary);
}

function generateCard(data) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const authorText = document.createElement('div');
    const titleText = document.createElement('div');
    const pagesText = document.createElement('div');
    const isReadText = document.createElement('div');

    data.forEach(element => {
        authorText.textContent = element.author;
        titleText.textContent = element.title;
        pagesText.textContent = element.pages;
        isReadText.textContent = element.isRead;
        newCard.append(authorText, titleText, pagesText, isReadText);
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
    isRead.value = '';
})