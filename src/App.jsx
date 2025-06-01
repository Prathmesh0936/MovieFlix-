import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import CardContainer from "./Components/CardContainer";
import Footer from "./Components/Footer";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("marvel");
  }, []);

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await response.json();
      if (data.length === 0) {
        alert("No movies found!");
      } else {
        setMovies(data.map((item) => item.show));
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <Navbar fetchMovies={fetchMovies} />
      <CardContainer movies={movies} />
      <Footer />
    </div>
  );
}
