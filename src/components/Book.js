import React from 'react';
import PropTypes from 'prop-types';

function Book({
  id, title, author, category,
}) {
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
        <p>chapter 17</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
