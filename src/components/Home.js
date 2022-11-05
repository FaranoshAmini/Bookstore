import React from 'react';
import BookForm from './BookForm';
import BooksList from './BooksList.js';

const Home = () => (
  <main className="home-main">
    <BooksList />
    <hr />
    <BookForm />
  </main>
);

export default Home;
