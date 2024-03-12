class Book {
    constructor(author, title, pages, isRead) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.dialog = document.querySelector("dialog");
        this.showButton = document.querySelector("dialog + button");
        this.newBookForm = document.querySelector("#newBook");
        this.sectionLibrary = document.querySelector("#library");
    }

    addBookToLibrary(book) {
        this.myLibrary.push(book);
    }

    printMyLibrary() {
        this.generateCard(this.myLibrary);
    }

    generateCard(data) {
        this.sectionLibrary.innerHTML = '';

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
            cardIsRead.textContent = `${book.isRead}`;
            bookCard.appendChild(cardIsRead);

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.setAttribute("data-index", index);
            removeButton.addEventListener("click", () => this.removeBookFromLibrary(index));
            bookCard.appendChild(removeButton);
            this.sectionLibrary.appendChild(bookCard);
        });
    }

    removeBookFromLibrary(index) {
        this.myLibrary.splice(index, 1);
        this.printMyLibrary();
    }

    init() {
        this.showButton.addEventListener("click", () => {
            this.dialog.showModal();
        });

        this.newBookForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const author = document.querySelector("#author");
            const title = document.querySelector("#title");
            const pages = document.querySelector("#pages");
            const isRead = document.querySelector('input[name="isRead"]:checked');

            this.addBookToLibrary(new Book(author.value, title.value, pages.value, isRead.value));
            this.printMyLibrary();
            author.value = '';
            title.value = '';
            pages.value = '';
        });
    }
}

// Initialize the library
const myLibrary = new Library();
myLibrary.init();
