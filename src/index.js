import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'The Adventures of Huckleberry Finn',
      'Life on the Mississippi',
      'Roughing It'
    ]
  },
  {
    name: 'Joseph Conrad',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Heart of Darkness'
    ]
  },
  {
    name: 'J.K. Rowling',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Harry Potter and the Sorcerer\'s Stone'
    ]
  },
  {
    name: 'Stephen King',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'It',
      'The Shining'
    ]
  },
  {
    name: 'Charles Dickens',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'David Copperfield',
      'A Tale of Two Cities'
    ]
  },
  {
    name: 'William Shakespeare',
    imageUrl: 'images/authors/marktwain.jpg',
    imageSource: 'Wikimedia Commons',
    books: [
      'Hamlet',
      'Macbeth',
      'Romeo and Juliet'
    ]
  }
];

function getTurnData() {
  const allBooks = authors.reduce((p, c, i) => {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
      author.books.some((title) => 
      title === answer) )
  }
};

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(
    <AuthorQuiz {...state} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
