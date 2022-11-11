import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function BookForm() {
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
}

export default BookForm;
