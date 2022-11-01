import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import MoviesList from "./components/MoviesList";
import Carousel from "./components/Carousel";

function App() {

  return (
    <div className="container mx-auto">
       <Navigation/>
        <Search/>
        <Carousel title="Popular movies" content={<MoviesList/>}/>
    </div>
  );
}

export default App;
