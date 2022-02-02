import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import MainPanel from './components/main-panel/main-panel';
import Login from './pages/login/login';
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Portfolio from './pages/portfolio/portfolio';
import Service from './pages/service/service';
import Testimonial from './pages/testimonial/testimonial';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
          <Login />
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/service' element={<Service />} />
          <Route path='/testimonial' element={<Testimonial />} />
          </Routes>

      </Router>
      </div>
    </div>
  );
}

export default App;
