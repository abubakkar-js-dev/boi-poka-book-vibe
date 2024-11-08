import { useLoaderData, useParams } from "react-router-dom";
import { addReadListToLS } from "../../localStorage/localStorage";
import { useState } from "react";
import { toast } from "react-toastify";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const id = parseInt(bookId);
  const book = books.find((book) => book.bookId === id);
  const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;

  const handleMarkAsRead = (id) => {
    addReadListToLS(id);
    toast('Added to the listed books.')
  }
  return (
    <div className="flex bg-white  p-6 container">
      {/* Book Cover */}
      <div className="w-1/2 flex justify-center items-center bg-black/5 p-16 rounded-2xl">
        <img
          src={image}// Replace with the actual image URL
          alt="Book Cover"
          className="rounded-lg max-h-[564px] shadow-md transform rotate-1/2"
        />
      </div>
      
      {/* Book Details */}
      <div className="w-1/2 pl-6 flex flex-col space-y-5">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <p className="text-gray-500 mb-2">By : {author}</p>
        <div className="divider"></div>
        <p className="text-sm font-semibold text-gray-700">{category}</p>
        <div className="divider"></div>
        {/* Review Section */}
        <div className="mt-4">
          <h3 className="font-bold">Review :</h3>
          <p className="text-gray-600 text-sm mt-2">
            {review}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4">
            <strong className="mr-5">Tags: </strong>
            {tags.map((tag,inx) =>  <span key={inx} className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold mr-2">
            {tag}
          </span>)}
        </div>
        <div className="divider"></div>

        {/* Book Info */}
        <div className="mt-4 text-gray-700 text-sm flex-grow space-y-3">
          <p><strong>Number of Pages:</strong> {totalPages}</p>
          <p><strong>Publisher:</strong> {publisher}</p>
          <p><strong>Year of Publishing:</strong> {yearOfPublishing}</p>
          <p><strong>Rating:</strong>{rating}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex">
          <button onClick={() =>handleMarkAsRead(id)} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Read</button>
          <button className="bg-blue-100 text-blue-500 py-2 px-4 rounded">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
