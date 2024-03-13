import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ErrorPage from './components/Error.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'portfolio',
        element: <Portfolio/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      },
      {
        path: 'resume',
        element: <Resume/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
