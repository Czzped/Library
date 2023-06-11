import { Book } from "./Book.mjs"

export class Library {
    static books = []
    static addANewBook(bookName, authorName, publicationYear, numbersOfPages) {
        const book = Library.books.find((ev) => { return ev.bookName === bookName })
        if (book) {
            throw new Error('Book already exist!!')
        }
        Library.books.push(new Book(bookName, authorName, publicationYear, numbersOfPages))
        return
    }
    static showBooksList() {
        return console.log(Library.books)
    }
    static borrowABook(bookName) {
        const book = Library.books.find((ev) => { return ev.bookName === bookName })
        if (!book) {
            throw new Error("This book doens't exist!!")
        } else if (book.bookAvailabilityStatus === 'unavailable') {
            throw new Error('This book is unavailable!!')
        }
        return book.bookAvailabilityStatus = 'unavailable'
    }
    static returnBook(bookName) {
        const book = Library.books.find((ev) => { return ev.bookName === bookName })
        if (!book) {
            throw new Error("This book doens't exist!!")
        } else if (book.bookAvailabilityStatus === 'available') {
            throw new Error('This book is already available!!')
        }
        return book.bookAvailabilityStatus = 'available'
    }
}

Library.addANewBook('1984', 'George Orwell', '1949', '416')