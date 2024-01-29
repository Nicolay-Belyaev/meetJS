class Book {
    title;
    author;

    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    isEqual(book) {return book.title === this.title && book.author === this.author;}
}


class Library {
    #books = [];

    constructor(booksPile) {
        booksPile.forEach((book) => {
            if (this.hasBook(book) === false) {
                this.#books.push(book)
            }
        })
    }
    get allBooks () {return this.#books;}

    addBook(newBook) {
        try {
            if (!(newBook instanceof Book)) {
                throw new Error("Can't add your book: Library can contain Books only.");
            }
            if (this.#books.some((book) => book.isEqual(newBook))) {
                throw new Error("Can't add your book: Library already contains this book.")
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
        this.#books.push(newBook);
    }

    hasBook(soughtBook) {
        return this.#books.some((book) => book.isEqual(soughtBook))
    }

    removeBook(deletedBook) {
        let removedBook = [];
        this.#books.forEach((book) => {
            if (book.isEqual(deletedBook)) {
                removedBook = this.#books.splice(this.#books.indexOf(book), 1)
            }
        })
        try {
            if (removedBook.length === 0) throw new Error("Can't delete your book: there's no such book in Library.");
        }
        catch (error) {console.log(error.message);}
    }
}
