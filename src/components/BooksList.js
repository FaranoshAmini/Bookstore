import { useSelector } from 'react-redux';
import Book from './Book';

function BooksList() {
// const books = [
//   {
//     id: 1,
//     title: 'The hunger games',
//     author: 'Suzanne Collins',
//     category: 'Action',
//   },
//   {
//     id: 2,
//     title: 'Dune',
//     author: 'Frank Herbert',
//     category: 'Science Fiction',
//   },
//   {
//     id: 3,
//     title: 'Capital in the Twenty-First Century',
//     author: 'Suzanne Collins',
//     category: 'Economy',
//   },
// ];

  const books = useSelector((state) => state.books);

  return (
    <section className="book-list">
      <h2>List of Books</h2>
      {
      books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
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
