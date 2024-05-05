import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookCard from "./bookcard";

const books = [
  {
    id: 1,
    title: "Java语言程序设计",
    price: "85元",
    image: "/images/1.jpg",
    alt: "Book1",
  },
  { id: 2, title: "1984", price: "28元", image: "/images/2.jpg", alt: "Book2" },
  {
    id: 3,
    title: "C++ Primer 中文版（第 5 版）",
    price: "128元",
    image: "/images/3.jpg",
    alt: "Book3",
  },
  {
    id: 4,
    title: "Java核心技术",
    price: "149元",
    image: "/images/4.jpg",
    alt: "Book4",
  },
  {
    id: 5,
    title: "GO专家编程",
    price: "108元",
    image: "/images/5.jpg",
    alt: "Book5",
  },
  {
    id: 6,
    title: "GO语言精进之路",
    price: "99元",
    image: "/images/6.jpg",
    alt: "Book6",
  },
  {
    id: 7,
    title: "吉伊卡哇 這又小又可愛的傢伙 1",
    price: "66元",
    image: "/images/7.jpg",
    alt: "Book7",
  },
  {
    id: 8,
    title: "吉伊卡哇 這又小又可愛的傢伙 2",
    price: "66元",
    image: "/images/8.jpg",
    alt: "Book8",
  },
  {
    id: 9,
    title: "吉伊卡哇 這又小又可愛的傢伙 3",
    price: "66元",
    image: "/images/9.jpg",
    alt: "Book9",
  },
  {
    id: 10,
    title: "吉伊卡哇 這又小又可愛的傢伙 4",
    price: "66元",
    image: "/images/10.jpg",
    alt: "Book10",
  },
];

const Frontpage = () => {
  /*Search Bar */
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  /*Book click */
  const navigate = useNavigate();
  

  return (
    <div className="mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center my-8">
        <div className="flex border-2 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex items-center justify-center px-4 border-l">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Frontpage;
