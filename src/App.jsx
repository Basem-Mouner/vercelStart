import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CounterContextProvider from './Context/UserContext';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

function App() {



  
  
  let routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "about", element: <About/> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);



  return (
    
      <CounterContextProvider >
        <RouterProvider router={routing}></RouterProvider>;
      </CounterContextProvider>   
  )
}

export default App
