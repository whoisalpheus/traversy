// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() { // Can only call static on object classes
        const StoredBooks = [ // Pretend this is local storage (hard coded data)
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434',
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45545'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr'); // Create a row

        // Adding the column
        row.innerHTML = `
        <td>${book.title}</td> // Go by html Title, Author, ISBN
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td> // Delete button
        `;

        // Append row to list:
        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

// Event: Remove a Book