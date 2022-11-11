import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

// eslint-disable-next-line react/function-component-definition
const BookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleInput = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setAuthor(e.target.value);
    }
    return e.target.value;
  };
  const handleAddBook = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(e.target.title.value, e.target.author.value));
      e.target.reset();
    }
  };

  return (
    <section className="book-form">
      <h2>Add a Book</h2>
      <form onSubmit={handleAddBook}>
        <input type="text" name="title" placeholder="Enter name of the book" onChange={handleInput} value={title} />
        <input
          type="text"
          name="author"
          placeholder="Enter name of the author"
          onChange={handleInput}
          value={author}
        />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default BookForm;
