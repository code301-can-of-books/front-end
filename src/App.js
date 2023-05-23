import React from 'react';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <nav>
            <h1>World of Books</h1>
            <Link to="/">Home</Link>
            <Link to="./About">About</Link>
          </nav>
          <Header />
          <Routes>
            <Route exact path="/" element={<BestBooks />}></Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
