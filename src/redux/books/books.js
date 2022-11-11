import { v4 as uuidv4 } from 'uuid';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const apiKey = 'vEEu5G5Iqrs3wYfAbg4u';
const requestedURL = `${baseURL}/apps/${apiKey}/books`;

// ACTIONS
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
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

// ACTIONS CREATOR
export const addBook = (title, author) => async (dispatch) => {
  const book = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Action',
  },
};

await fetch(requestedURL, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
  .then(() => dispatch({
    type: ADD_BOOK,
    payload: book,
  }));

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});
export default booksReducer;
