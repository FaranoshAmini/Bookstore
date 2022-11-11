import React from 'react';
import BookForm from './BookForm';
import BooksList from './BooksList';

// eslint-disable-next-line react/function-component-definition
const Home = () => (
  <main className="home-main">
    <BooksList />
    <hr />
    <BookForm />
  </main>
);

export default Home;
