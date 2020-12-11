import React, { useState } from "react";
import "./styles.css";

const bookList = {
  Bussiness: [
    {
      book: "The Intelligent Investor",
      rating: "4.5/5",
      author: "Benjamin Gramham"
    },
    { book: "Rich Dad Poor Dad", rating: "4.8/5", author: "Robert Kiyosaki" },
    { book: "Extreme Ownership", rating: "4.9/5", author: "Jocko & Leif" },
    { book: "Dare to Lead", rating: "4.3/5", author: "Brene Brown" }
  ],
  Programming: [
    {
      book: "Eloquent Javascript",
      rating: "4.4/5",
      author: "Marijn Haverbeke"
    },
    { book: "clean Code", rating: "4.3/5", author: "Robert Martin" },
    { book: "You Don't Know JS", rating: "4.4/5", author: "Kyle Simpson" },
    { book: "HTML & CSS", rating: "4.4/5", author: "Jon Duckett" }
  ],
  "Self Help": [
    { book: "Ikigai", rating: "4.3/5", author: "Hector Garcia" },
    { book: "Think Like a Monk", rating: "4.9/5", author: "Jay Shetty" },
    {
      book: "Life's Amazing Secrets",
      rating: "4.4/5",
      author: "Gaur Gopal Das"
    },
    {
      book: "The Monk Who Sold His Ferrari",
      rating: "4.5/5",
      author: "Robin Sharma"
    }
  ],
  Biography: [
    { book: "A Promised Land", rating: "4.9/5", author: "Barack Obama" },
    { book: "Wings of Fire", rating: "5/5", author: "APJ Abdul Kalam" },
    { book: "Sheo Dog", rating: "4.3/5", author: "Phil Knight" },
    { book: "You Can't Hurt Me", rating: "4.4/5", author: "David Goggins" }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("Bussiness");
  function genereClickHandler(genre) {
    setGenre(genre);
  }

  const genereArray = Object.keys(bookList);

  return (
    <div className="App">
      <div className="app-heading">Awesome Books</div>
      <hr className="app-hr" />
      <div className="app-sub-heading">
        select the genre to get recommendation
      </div>
      <div className="app-button-container">
        {genereArray.map((genre) => (
          <button
            key={genre}
            className="app-button"
            onClick={() => genereClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="app-recommended-book">
        {bookList[currentGenre].map((book) => (
          <div key={book.book} className="app-book-card">
            <p className="app-book-card-heading">
              {book.book} - <span>{book.author}</span>
            </p>
            <p className="app-book-card-rating">{book.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
