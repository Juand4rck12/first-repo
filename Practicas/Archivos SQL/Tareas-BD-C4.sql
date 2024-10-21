-- Crear tabla Author
CREATE TABLE Author (
    Author_ID INTEGER PRIMARY KEY,
    Name VARCHAR(100),
    Nationality VARCHAR(50)
);

-- Insertar datos en Author
INSERT INTO Author (Author_ID, Name, Nationality) VALUES
(1, 'George Orwell', 'British'),
(2, 'Jane Austen', 'British'),
(3, 'Mark Twain', 'American'),
(4, 'J.K. Rowling', 'British'),
(5, 'J.R.R. Tolkien', 'British');

-- Crear tabla Publisher
CREATE TABLE Publisher (
    Publisher_ID INTEGER PRIMARY KEY,
    Name VARCHAR(100),
    Country VARCHAR(50)
);

-- Insertar datos en Publisher
INSERT INTO Publisher (Publisher_ID, Name, Country) VALUES
(1, 'Penguin Books', 'United Kingdom'),
(2, 'Oxford University Press', 'United Kingdom'),
(3, 'HarperCollins', 'United States');

-- Crear tabla Book
CREATE TABLE Book (
    Book_ID INTEGER PRIMARY KEY,
    Title VARCHAR(100),
    Genre VARCHAR(50),
    Publication_Year INTEGER,
    Publisher_ID INTEGER,
    FOREIGN KEY (Publisher_ID) REFERENCES Publisher(Publisher_ID)
);

-- Insertar datos en Book
INSERT INTO Book (Book_ID, Title, Genre, Publication_Year, Publisher_ID) VALUES
(1, '1984', 'Dystopian', 1949, 1),
(2, 'Pride and Prejudice', 'Romance', 1813, 2),
(3, 'Adventures of Huckleberry Finn', 'Adventure', 1884, 3),
(4, 'Harry Potter and the Philosopher\´s Stone', 'Fantasy', 1997, 1),
(5, 'The Hobbit', 'Fantasy', 1937, 1);

CREATE TABLE Book_Author (
    Book_ID INTEGER,
    Author_ID INTEGER,
    FOREIGN KEY (Book_ID) REFERENCES Book(Book_ID),
    FOREIGN KEY (Author_ID) REFERENCES Author(Author_ID),
    PRIMARY KEY (Book_ID, Author_ID)
);


INSERT INTO Book_Author (Book_ID, Author_ID) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(4, 1), 
(5, 2);

-- CONTENIDO TAREA 4

-- Punto #1:
	-- REPORTE 1:
	SELECT Book.Title, Book.Genre, Publisher.Name AS Publisher 
	FROM Book
		JOIN Publisher ON Book.Publisher_ID = Publisher.Publisher_ID
	WHERE Publisher.Name = 'Penguin Books';
	
	
	-- REPORTE 2:
	SELECT * FROM Book 
		WHERE Publication_Year > 1950;
		
	SELECT * FROM Book;
	
	-- REPORTE 3:
	SELECT Author.Name FROM Author
		WHERE Author.Author_ID IN (
			SELECT Book_Author.Author_ID FROM Book_Author
				JOIN Book ON Book_Author.Book_ID = Book.Book_ID
			WHERE Book.Genre = 'Fantasy'
		);


	-- Reporte 4:
	SELECT Book.Title FROM Book
		JOIN Book_Author ON Book.Book_ID = Book_Author.Book_ID
		WHERE Book_Author.Author_ID IN (
			SELECT Author.Author_ID FROM Author
			WHERE Author.Name LIKE 'J.K%'
		); 


	-- Reporte 5:
	SELECT Title FROM Book
		JOIN Book_Author ON Book.Book_id = Book_Author.Book_ID
		WHERE Book_Author.Author_ID IN (
			SELECT Author_ID FROM Author
				WHERE Nationality = 'British');


-- Punto #2:
	-- Actualizar el género del libro '1984' a 'Science Fiction':
	UPDATE Book
		SET Genre = 'Science Fiction'
			WHERE Title = '1984';

	SELECT * FROM Book;

	-- Cambiar la nacionalidad de 'Mark Twain' a 'Canadian':
	UPDATE Author
		SET Nationality = 'Canadian'
			WHERE Name = 'Mark Twain';

	SELECT * FROM Author;


-- Punto #3:
	-- Eliminar el libro 'Pride and Prejudice' de la base de datos:
	-- se eliminan las referencias en Book_Author
	DELETE FROM Book_Author
	WHERE Book_ID = (
		SELECT Book_ID FROM Book
			WHERE Title = 'Pride and Prejudice');


	-- se elimina el libro
	DELETE FROM Book
		WHERE Title = 'Pride and Prejudice';

	SELECT * FROM Book;

	-- Eliminar los autores que no han escrito ningún libro:
	DELETE FROM Author
		WHERE Author_ID NOT IN (
			SELECT Author_ID FROM Book_Author);