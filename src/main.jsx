import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Pages/Home.jsx'
import About from './Components/Pages/About'
import DashBoard from './Components/Pages/DashBoard';
import MainLayout from './Components/MainLayout/MainLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx'
import ListedBook from './Components/ListedBook/ListedBook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import {


  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/Books.json')
      },
     
     {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/listedBooks",
        element: <ListedBook></ListedBook>,
        loader :()=> fetch('/Books.json')
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
    ]
  },
 
]);







createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  
  </StrictMode>,
)
