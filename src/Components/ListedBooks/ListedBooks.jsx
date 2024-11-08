import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadListFromLS } from "../../localStorage/localStorage";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Helmet } from "react-helmet-async";

const ListedBooks = () => {
  const [readList,setReadList] = useState([]);
  const allBooks = useLoaderData();

  console.log(readList);


  useEffect(()=>{
    const storedReadList = getReadListFromLS();
    const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId));
    setReadList(readBookList);
  },[])
  
  return (
    <div>
      <Helmet>
        <title>Listed Books | Book Vibes</title>
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>Listed Books</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-3 gap-5 my-24">
            {readList.map(book => <Book key={book.id} book={book} />)}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
