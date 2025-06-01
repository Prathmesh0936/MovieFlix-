import React from "react";
import "./Cards.css";
function Card({ movie }) {
  return (
    <div
      className="w-[360px] border min-h-[400px] overflow-hidden rounded-b-lg hover:-translate-y-2 transition-all mt-10 mx-2 card"
      onClick={() => window.open(movie?.officialSite || `https://www.themoviedb.org/movie/${movie?.id}`, "_blank")}
    >
      <img id="#card-img" src={movie?.image?.medium || "placeholder.jpg"} alt="Movie" className="w-full h-[180px] object-cover" />
      {/* <div className="p-3">
        <h3 className="font-bold">{movie?.name || "No title"}</h3>
        <p className="text-sm">{movie?.genres?.join(", ") || "No genre"}</p>
      </div> */}
    </div>
  );
}

export default function CardContainer({ movies }) {
  return (
    <div className="flex flex-wrap justify-center items-center  cards-container">
      {movies.length > 0 ? movies.map((movie) => <Card key={movie.id} movie={movie} />) : <p>No movies found.</p>}
    </div>
  );
}
