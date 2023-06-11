export class Book {
    constructor(bookName, authorName, publicationYear, numbersOfPages) {
        this.bookName = bookName
        this.authorName = authorName
        this.publicationYear = publicationYear
        this.numbersOfPages = numbersOfPages
        this.bookAvailabilityStatus = 'available'
    }
}