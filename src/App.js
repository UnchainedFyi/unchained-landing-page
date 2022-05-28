import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from './navbar';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Roadmap } from './pages/roadmap/roadmap';
import { NotFound } from './pages/notFound/notfound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
            <div style={{paddingBottom: 50}}>
              <NavBar />
            </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <div className="footer">
          <p style={{ paddingBottom: 20 }}>
            Unchained LLC, 2022. All Rights Reserved.
          </p>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
