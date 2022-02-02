import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import Header from '../../components/header/header';
import MainPanel from '../../components/main-panel/main-panel';
import home1 from '../../images/home1.jpg';
import './home.css';

const Home = () => {
  console.log('Enter')
  return (
    <div className="home-container">
      {/* <Router>
        <div className="container">
          <div className="main-body">
            <div className="header-menu">
              <Header />
            </div>
            <div className="main-panel">
              <MainPanel />
            </div>
          </div>

        </div>
      </Router> */}
      <div className="home-dody">
        <p>This is Our Company Home Page</p>
      </div>
    </div>
  )
}

export default Home;
