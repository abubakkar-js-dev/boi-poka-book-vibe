import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    
    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[]);

    return (
        <section className="container mb-24">
            <h2 className="text-3xl text-center font-bold mb-8">Books({books.length})</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {books.map(book => <Book key={book.bookId} book={book} />)}
            </div>
        </section>
    );
};

export default Books;