import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import ErrorPage from './Components/Errorpage/ErrorPage'
import Home from './Components//Home/Home'
import Dashboard from './Components/Dashboard/Dashboard'
import BookDetails from './Components/BookDetails/BookDetails'
import ListedBooks from './Components/ListedBooks/ListedBooks'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/books/:bookId',
        element: <BookDetails />,
        loader: () => fetch('booksData.json'),
      },
      {
        path:'/listed-books',
        loader: ()=>fetch('/booksData.json'),
        element: <ListedBooks />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
