import React, { Component } from 'react';
import './App.css';

// Component File Imports
import Header from './Components/Header';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import BlogPost from './Components/BlogPost';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Blog />
        <Footer />
        <BlogPost />
      </div>
    );
  }
}

export default App;
