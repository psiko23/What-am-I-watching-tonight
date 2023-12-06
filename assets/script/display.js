let storedMovieDetails = localStorage.getItem('Selected Movie');
let storedShowDetails = localStorage.getItem('Selected Show');

let saveForLaterBtn = document.getElementById('save-later');

let nameYear = document.getElementById('feature-name');
let rating = document.getElementById('feature-ratings');
let whereToWatch = document.getElementById('feature-location');
let description = document.getElementById('feature-description');
let topCast = document.getElementById('feature-cast-crew');
let trailer = document.getElementById('feature-trailer');
let placeHolderTrailer = document.createElement('img');
let backBtnEl = document.getElementById('back-main');
backBtnEl.addEventListener('click',function(){
    window.location.href = './index.html';
})

if (storedMovieDetails) {
    let movieDetails = JSON.parse(storedMovieDetails);
    console.log('Stored movie details: ', movieDetails);
    displayMovieDetails(movieDetails);
}

if (storedShowDetails) {
    let showDetails = JSON.parse(storedShowDetails);
    console.log('Stored show details: ', showDetails);
    displayShowDetails(showDetails);
}

function displayMovieDetails(movieDetails) {
    let yearM = movieDetails.release_date.split('-');
        yearM = yearM[0];
    nameYear.innerHTML = movieDetails.title + ' : ' + yearM;
    whereToWatch.innerHtml = + 'Placeholder';
    rating.innerHTML = "This Movie has a rating of " + movieDetails.vote_average;
    description.innerHTML = "Description Summary: " + movieDetails.overview;
    let imgSrcM = "https://image.tmdb.org/t/p/original/" + movieDetails.poster_path;
    placeHolderTrailer.setAttribute('src', imgSrcM);
    console.log(movieDetails.poster_path);
    trailer.appendChild(placeHolderTrailer);
    saveForLaterBtn.addEventListener('click',function() {
        saveForLater(movieDetails);
    })
}

function displayShowDetails(showDetails) {
    let yearS = showDetails.first_air_date.split('-');
        yearS = yearS[0];
    nameYear.innerHTML = showDetails.name + ' : ' + yearS;
    whereToWatch.innerHTML = 'Placeholder';
    rating.innerHTML = "This Show has a rating of " + showDetails.vote_average;
    description.innerHTML = "Description Summary: " + showDetails.overview;
    let imgSrcS = "https://image.tmdb.org/t/p/original/" + showDetails.poster_path;
    placeHolderTrailer.setAttribute('src', imgSrcS);
    // console.log(showDetails.poster_path);
    trailer.appendChild(placeHolderTrailer);
    saveForLaterBtn.addEventListener('click', function() {
        saveForLater(showDetails);
    })
}

function saveForLater(data) {
    let myList = localStorage.getItem('myList');
    myList = JSON.parse(myList);
    if (myList === null) {
        myList = [];
    }
    let newItem = data;
    console.log(newItem);
    myList.push(newItem);
    console.log(myList);
    localStorage.setItem('myList',JSON.stringify(myList));

}

placeHolderTrailer.setAttribute('class', 'placeHolderPoster');

