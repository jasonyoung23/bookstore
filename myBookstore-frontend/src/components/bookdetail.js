import React from 'react';
import { useParams } from 'react-router-dom';
// import { books } from '../data/booksData';
import { useCart } from '../contexts/cartcontext';
import '../styles/bookStyle.css';

const BookDetail = () => {
  let books = [];
  console.log("books", books)
  
  const { book } = useParams();
  // const book = books.find(book => book.alt === alt);
  const { addToCart } = useCart();

  // Handle book not found
  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="mt-5 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow overflow-hidden rounded-lg mt-12">
          <div className="flex flex-row">
            {/* Image Section */}
            <div className="h-full bg-white overflow-hidden flex-none">
              <img src={book.image} alt={book.alt} className="book-image" />
            </div>
            {/* Content Section */}
            <article className="w-full p-4 space-y-6 flex flex-col">
              <h1 className="book-title-font break-words">{book.title}</h1>
              <div className="custom-divider">
                <span>基本信息</span>
              </div>
              <div className="info-section">
                <div>作者：{book.author}</div> 
              </div>
              <div className="custom-divider">
                <span>作品简介</span>
              </div>
              <p className="text-sm text-gray-900 break-words">{book.description}</p> 
              <div className="price-section">
                <div>抢购价</div>
                <div className="info-section">
                  <div className="price-font text-red-600">{book.price}</div>
                </div>
              </div>
              <div className="button">
                <button
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-gray-200 p-2 rounded"
                onClick={() => addToCart(book)}>
                  加入购物车</button>
                <a className="buy transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-green-500 text-white p-2 rounded">立即购买</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
