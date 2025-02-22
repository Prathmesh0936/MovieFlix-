// const apikey = `516adf1e1567058f8ecbf30bf2eb9378`;

const action =  document.querySelector("#action");
const Comedy = document.querySelector("#Comedy");
const crime = document.querySelector("#crime");
const scienceFiction = document.querySelector("#Science_fiction");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const cardsContainer = document.querySelector("#cards-container");
const alertContainer = document.querySelector("#alert-container");
let mode =  document.querySelector("#mode");
let navbar = document.querySelector(".navbar");

// dislaying the movies on websites laod

window.addEventListener('load', () => {
    fetchMovies('marvel');
});
scienceFiction.addEventListener('click', () => {
    fetchMovies('science fiction');
})
action.addEventListener('click', () => { 
    fetchMovies('action');
})
Comedy.addEventListener('click', () => {
    fetchMovies('Comedy');
})
crime.addEventListener('click', () => {
    fetchMovies('crime');
})
cardsContainer.addEventListener('click', () => {
    alert("Movie Book Successfully");
})
// search button click event
searchBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent page reload
    let query = searchInput.value.toLowerCase();
    if(query){
        fetchMovies(query);
    }else{
        showAlert("Please enter a movie name!", "warning"); 
    }
});



// fetch movies
function fetchMovies(query){
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`).
    then((response) => {
        return response.json();
    }).then((data) => {
        if(data.length === 0){
            showAlert("No movies found!", "danger");
            return;
        }
        bindData(data); // binds the data and send it to display
    }).catch((error) => {
        console.log(error);
        
    })
}

// clone div into main section

function bindData(movies){
    cardsContainer.innerHTML = ''; // use to clear previous data

    const cardTemplate = document.querySelector('#card-template');


    movies.forEach((item) => {
        const movie = item.show;
        const cardClone = cardTemplate.content.cloneNode(true);
        fillData(cardClone, movie);
        cardsContainer.append(cardClone);
    });
}

// fill data into cards
function fillData(cardClone, movie){

    const movieImg = cardClone.querySelector("#cardImg");
    // const movieHeading = cardClone.querySelector("#cardHeading");
    // const movieDesc = cardClone.querySelector("#cardDespription");
    // const movieRelseaseDate = cardClone.querySelector("#cardDate");
    // const movieSource = cardClone.querySelector("#cardScouce");

    movieImg.src = movie.image.medium;
    // movieHeading.textContent = movie.name || `No title available`;
    // movieDesc.textContent = movie.summary;


//    movieSource.textContent = movie.genres.length > 0 ? movie.genres.join(", ") : "No Movie type Mentioned";

    //  const date = new Date(movie.premiered).toLocaleString();
    //  movieRelseaseDate.textContent = date;

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(movie.officialSite || `https://www.themoviedb.org/movie/${movie.id}`, "_blank");
    });
}

let currmode = "Ligth";

mode.addEventListener("click", () => {
    if(currmode === "Ligth"){
        document.querySelector("body").style.backgroundColor = "black"; 
        navbar.classList.remove("navbar1") 
        currmode = "Dark";
    }else{
        document.querySelector("body").style.backgroundColor = "white";  
        navbar.classList.add("navbar1")
        currmode = "Ligth";
    }
})