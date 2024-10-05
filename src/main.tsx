import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage.tsx';
import PageNotFound from './pages/pageNotFound/PageNotFound.tsx';
import ContactUsPage from './pages/contactPage/ContactUsPage.tsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <HomePage/>
      },
      {
        path : "/contact-us",
        element : <ContactUsPage/>
      }
    ],
    errorElement : <PageNotFound/>
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
