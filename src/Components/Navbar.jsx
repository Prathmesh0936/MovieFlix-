import React from "react";

export default function Navbar({ fetchMovies }) {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-primary" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" id="mode" href="#"><i>MovieFlix</i></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {["Science Fiction", "Action", "Comedy", "Crime"].map((genre) => (
              <li className="nav-item" key={genre}>
                <button
                  className="nav-link active btn"
                  onClick={() => fetchMovies(genre)}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
          <form
            className="d-flex search-container"
            onSubmit={(e) => {
              e.preventDefault();
              fetchMovies(document.querySelector("#searchInput").value);
            }}
          >
            <input className="form-control me-2" id="searchInput" type="search" placeholder="Search" />
            <button className="btn btn-outline-success" type="submit" id="searchBtn">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}
