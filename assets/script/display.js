//need seperate fetch request for user selected movie/ show

//blanket fetch request for movie credits = fectch('https://api.themoviedb.org/3/movie/movie_[.id]/credits?language=en-US', options)

//blanket fetch request for show credits = fectch('https://api.themoviedb.org/3/tv/series_[.id]/credits?language=en-US', options)

//info to be stored for the display.html from the original fetch request
    //.overview (summary of the movie/series in question)
    //.title (title)
    //.vote_average (average score on a scale of 1-10)
    //.release_date (release date)
    //.poster_path (placeholder for trailer for the time being)(?)
    //.id (movie/tv show id to be used in credits fetch request)

//info to be stored from the credits fetch request
    //.cast (full cast list of the series/movie will only need to grab the top 2 actors maybe three tbd)
    //.name 
    //.crew
    //.known_for_department = "directing"
    //.name

//response.cast[0/1]

//blanket fetch request for where to watch = fetch ('https://api.themoviedb.org/3/(movie or tv)/[.id]/watch/providers', options)

let storedMovieDetails = localStorage.getItem('Selected Movie');
let storedShowDetails = localStorage.getItem('Selected Show');

let saveForLaterBtn = document.getElementById('save-later');

let nameYear = document.getElementById('feature-name');
let rating = document.getElementById('feature-ratings');
let whereToWatch = document.getElementById('feature-location');
let description = document.getElementById('feature-description');
let topCast = document.getElementById('feature-cast-crew');
let trailer = document.getElementById('feature-trailer');
let placeHolderTrailer = document.createElement('img')
placeHolderTrailer.setAttribute('class', 'placeHolderPoster');

let movieInfo = JSON.parse(storedMovieDetails);
let ShowInfo = JSON.parse(storedShowDetails);

if (storedMovieDetails) {
    let yearM = movieInfo.release_date.split('-');
        yearM = yearM[0];
    nameYear.textContent = movieInfo.title + ' : ' + yearM;
    whereToWatch.innerHtml = + 'Placeholder';
    rating.textContent = "This Movie has a rating of " + movieInfo.vote_average;
    description.textContent = "Description Summary: " + movieInfo.overview;
    let imgSrcM = "https://image.tmdb.org/t/p/original/" + movieInfo.poster_path;
    placeHolderTrailer.setAttribute('src', imgSrcM);
    console.log(movieInfo.poster_path);
    trailer.appendChild(placeHolderTrailer);
}

if (storedShowDetails) {
    let yearS = ShowInfo.first_air_date.split('-');
        yearS = yearS[0];
    nameYear.textContent = ShowInfo.name + ' : ' + yearS;
    whereToWatch.innerHtml = + 'Placeholder';
    rating.textContent = "This Show has a rating of " + ShowInfo.vote_average;
    description.textContent = "Description Summary: " + ShowInfo.overview;
    let imgSrcS = "https://image.tmdb.org/t/p/original/" + ShowInfo.poster_path;
    placeHolderTrailer.setAttribute('src', imgSrcS);
    console.log(ShowInfo.poster_path);
    trailer.appendChild(placeHolderTrailer);
}


let savedForLater = [];

if (storedMovieDetails) {
    let movieDetails = JSON.parse(storedMovieDetails);
    console.log('Stored movie details: ',movieDetails);
    saveForLaterBtn.addEventListener('click',function() {
        let year = movieDetails.release_date.split('-');
        year = year[0];
        let savedMovie = {
            type: 'movie',
            id: movieDetails.id,
            title: movieDetails.title,
            year: year,
            rating: movieDetails.vote_average,
            description: movieDetails.overview,
            posterpath: movieDetails.poster_path
        }
        savedForLater.push(savedMovie);
        console.log(savedForLater);

        localStorage.setItem('Saved for later',JSON.stringify(savedForLater));
    })
}

if (storedShowDetails) {
    let storedShowDetails = localStorage.getItem('Selected Show');
    let showDetails = JSON.parse(storedShowDetails);
    console.log('Stored show details: ',showDetails);
    saveForLaterBtn.addEventListener('click',function() {
        let year = showDetails.first_air_date.split('-');
        year = year[0];
        let savedShow = {
            type: 'show',
            id: showDetails.id,
            title: showDetails.name,
            year: year,
            rating: showDetails.vote_average,
            description: showDetails.overview,
            posterpath: showDetails.poster_path
        }
        savedForLater.push(savedShow);
        console.log(savedForLater);
    })
    localStorage.setItem('Saved for later', JSON.stringify(savedForLater));
}


