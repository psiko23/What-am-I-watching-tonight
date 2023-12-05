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

let saveBtn = document.getElementById('save-later');

let nameYear = document.getElementById('feature-name');
let rating = document.getElementById('feature-ratings');
let whereToWatch = document.getElementById('feature-location');
let description = document.getElementById('feature-description');
let topCast = document.getElementById('feature-cast-crew');
let trailer = document.getElementById('feature-trailer');

let savedForLater = [];

if (storedMovieDetails) {
    let movieDetails = JSON.parse(storedMovieDetails);
    console.log('Stored movie details: ',movieDetails);
    saveBtn.addEventListener('click',function() {
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
    let showDetails = JSON.parse(storedShowDetails);
    console.log('Stored show details: ',showDetails);
    saveBtn.addEventListener('click',function() {
        let year = showDetails.first_air_date.split('-');
        year = year[0];
        let savedShow = {
            type: 'show',
            id: showDetails.id,
            title: showDetails.title,
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

function fillMovieInfo (){
    nameYear.innerHTML = '';
}