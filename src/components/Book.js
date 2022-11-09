import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';

function Book(props) {
  const {
    title, author, category,
  } = props;
  return (
    <div className="book-div">

      <div className="book-info">
        <div>
          <p>{category}</p>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <div className="book-btns">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-status">
        <div className="status-circle" />
        <p>64%</p>
        <p>Completed</p>
      </div>

      <div className="book-chapter">
        <p>Current chapter</p>
        <p>chapter 20</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
