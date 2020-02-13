import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Category" component={Category} />
        <Route exact path="/Search" component={Search} />
      </Router>
    </>
  );
}

export default App;
