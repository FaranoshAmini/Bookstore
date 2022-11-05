import Book from './Book';

function BooksList() {
  const books = [
    {
      id: 1,
      title: 'The hunger games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

  return (
    <section className="book-list">
      <h2>List of Books</h2>
      {
        books.map((book) => (
          <Book
            key={book.id}
            book={book}
          />
        ))
      }
    </section>
  );
}

export default BooksList;
