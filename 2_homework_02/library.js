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
            if (this.hasBook(book) === false) {this.#books.push(book)}
        })}

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
        let indexBook;
        let res = this.#books.some((book, index) => {
            indexBook = index;
            return book.isEqual(soughtBook);
        });
        return res ? indexBook : false;
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

const book1 = new Book("123", "321")
const book2 = new Book("123", "321")

const lib = new Library([book1, book2])

console.log(lib.allBooks)
