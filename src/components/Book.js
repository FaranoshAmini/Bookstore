import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

// eslint-disable-next-line react/function-component-definition
const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-div" id={id}>

      <div className="book-info">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="book-btns">
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemoveBook(id)}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-status">
        <div className="status-circle" />
        <p>85%</p>
        <p>Completed</p>
      </div>

      <div className="book-chapter">
        <p>Current chapter</p>
        <p>chapter 20</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
