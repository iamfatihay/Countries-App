import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MyNavbar from "./components/navbar/MyNavbar";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Details from './pages/details/Details';
import NotFound from './pages/notFound/NotFound';
import "./App.css";

function App() {


  //! burada navbar ve footer demirbaş olmalı, Home, About, Details sayfaları Route etiketleri ile Routes içinde belirlenmeli 

  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Details/:namee" element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;