import React, { useState, Fragment, useEffect } from 'react'
// import { Router, RouteComponentProps } from "@reach/router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import './main-panel.css';
import About from '../../pages/about/about';
import Blog from '../../pages/blog/blog';
import Contact from '../../pages/contact/contact';
import Home from '../../pages/home/home';
import Portfolio from '../../pages/portfolio/portfolio';
import Service from '../../pages/service/service';
import Testimonial from '../../pages/testimonial/testimonial';




const MainPanel = () => {

  useEffect(() => {
    // HeaderView()
  }, [])



  const HeaderView = () => {
    const location = useLocation();
    console.log(location.pathname);
    // return <span>Path : {location.pathname}</span>
  }

  return (
    <div>
      <div className="main-panel-container">
        {/* <div className="home-container">
          <div className="home-dody">
            <p>This is Our Company Home Page</p>
          </div>
        </div> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/home' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/service' element={<Service />} />
          <Route path='/testimonial' element={<Testimonial />} />
          {/* <Router> */}
          {/* <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route path='/home' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/service' component={Service} />
          <Route path='/testimonial' component={Testimonial} /> */}
          {/* </Router> */}
        </Routes>
      </div>
    </div>


    //   <div>
    //   <div className="main-panel-container">
    //     <Route path='/about' component={About} />
    //     <Route path='/blog' component={Blog} />
    //     <Route path='/contact' component={Contact} />
    //     <Route path='/home' component={Home} />
    //     <Route path='/portfolio' component={Portfolio} />
    //     <Route path='/service' component={Service} />
    //     <Route path='/testimonial' component={Testimonial} />
    //   </div>
    //   <Router>
    //     <div>
    //       {/* {path != '/about' ? (<About></About>):null}  */}
    //     </div>
    //   </Router>
    // </div>



    // <div>
    //   <Router>
    //     <RouterPage path="/" pageComponent={<About />} />
    //     <RouterPage path="/profile" pageComponent={<Blog />} />
    //   </Router>
    // </div>

  );
}

export default MainPanel;
