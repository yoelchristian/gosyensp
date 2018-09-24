import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import ProductDetail from "./components/ProductDetail.js";

const App = () =>
  <div>
    <Router>
        <div>
          <Route path="/" component={ Main } />
          {/* <Route exact path="/products/:id" component={ ProductDetail } /> */}
        </div>
    </Router>
  </div>
  

export default App;
