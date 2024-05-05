import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const handleBookClicked = (book) => {
  navigate("/bookdetail", { state: { book } });
};

const BookCard = ({ book }) => (
  <div className="bg-white shadow overflow-hidden rounded-lg">
    <Button to={`/book/${book.alt}`}>
      <img className="w-full h-48 object-contain" src={book.image} alt={book.alt} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="mt-1 text-red-600">{book.price}</p>
      </div>
    </Button>
  </div>
);

export default BookCard;
