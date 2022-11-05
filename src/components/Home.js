import React from 'react';
import BookForm from './BookForm';
import BooksList from './BooksList';

function Home() {
  return (
    <main className="home-main">
      <BooksList />
      <hr />
      <BookForm />
    </main>
  );
}

export default Home;
