import Book from './Book';
import { useSelector } from 'react-redux';

function BooksList() {
  const books = [
    {
      id: 1,
      title: 'Hear Yourself',
      author: 'Prem Rawat',
      category: 'Motivational',
    },
    {
      id: 2,
      title: 'Business of Sports: The Winning Formula for Success',
      author: 'Vinit Karnik',
      category: 'Motivational',
    },
    {
      id: 3,
      title: 'Great American Hero',
      author: 'Marian Anderson',
      category: 'Historical',
    },
  ];

  return (
    <section className="book-list">
      <h2>List of Books</h2>
      {
        books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))
      }
    </section>
  );
}

export default BooksList;
