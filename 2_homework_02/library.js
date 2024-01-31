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
        booksPile.forEach((book) => {this.addBook(book)})}

    get allBooks () {return this.#books;}

    addBook(newBook) {
        try {
            if (!(newBook instanceof Book)) {
                throw new Error("Can't add your book: Library can contain Books only.");
            }
            if (typeof this.hasBook(newBook) == "number") {
                throw new Error("Can't add your book: Library already contains this book.")
            }
            this.#books.push(newBook);
        } catch (error) {
            console.log(error.message);
        }
    }

    hasBook(soughtBook) {
        let indexBook;
        let res = this.#books.some((book, index) => {
            indexBook = index;
            return book.isEqual(soughtBook);
        });
        return (res ? indexBook : false);
    }

    removeBook(deletedBook) {
        let bookIndexOrFalse = this.hasBook(deletedBook); // 0
        try {
            if (typeof bookIndexOrFalse !== "number") {
                throw new Error("Can't delete your book: there's no such book in Library.")
            }
            this.#books.splice(bookIndexOrFalse, 1)
        } catch (error) {
            console.log(error.message);
        }
    }
}

const book1 = new Book("1", "1")
const book2 = new Book("2", "2")
const book3 = new Book("3", "3")

const lib = new Library([book1, book1, book2, book3])

console.log(lib.allBooks)
console.log(lib.hasBook(book2))
lib.removeBook(book2);
console.log(lib.allBooks)
