import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookName, image, author, tags, category, rating, bookId } = book;
  return (
    <Link to={`books/${bookId}`} className="w-full">
      <div className="p-6 rounded-2xl border border-black/15 w-full">
        <div className="bg-gray-300 w-full rounded-2xl py-6 mb-6">
          <img
            className="h-40  mx-auto"
            src={image}
            alt={`image of ${bookName}`}
          />
        </div>
        <div className="space-y-5">
          <div className="flex gap-6">
            {tags.map((tag, inx) => (
              <div
                key={inx}
                className="btn font-medium bg-green-50 text-green-500 rounded-full"
              >
                {tag}
              </div>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-black">{bookName}</h3>
          <p className="text-base font-medium text-black/80">By: {author}</p>
          <div className="border-b-2 border-dashed"></div>
          <div className="flex justify-between font-medium text-black/80">
            <p>{category}</p>
            <div className="flex gap-2">
              <p>{rating}</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.proptypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
