import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { displayBooks } from '../redux/books/books';

// eslint-disable-next-line react/function-component-definition
const BooksList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayBooks());
  }, [dispatch]);
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
};

export default BooksList;
