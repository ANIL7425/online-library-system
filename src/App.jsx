import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Browsebooks from './Components/Browsebooks'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookdetail from './Components/Bookdetail'
import AddBook from './Components/Addbook'
import Search from './Components/Search'
import NotFound from './Components/NotFound'
import { Provider } from 'react-redux';
import appStore from './redux/appStore'
function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>       
        <Route path="/" element={<Home />} />
        <Route path="/browse-books" element={<Browsebooks />} />
        <Route path="/browse-books/:category" element={<Browsebooks />} />
        <Route path="/browse-books/bookdetails/:id" element={<Bookdetail />}/>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/search" element={<Search />}/>
        <Route path="*" element={<NotFound />} />
        
        </Routes>
        
    </Router>
       
  )
}


  

export default App
