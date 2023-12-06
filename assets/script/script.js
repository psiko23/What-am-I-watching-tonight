let movieGenreEl = document.querySelectorAll('#dropdown-m .movieslist li');
let showGenreEl = document.querySelectorAll('#dropdown-m .movieslist li');
let showTitles = document.getElementById('showtitles');
let movieTitles = document.getElementById('movietitles');
let myListEl = document.getElementById('listTitles');

let movieBtn = document.querySelector("#movies");
let showBtn = document.querySelector("#shows");
let genreBtn = document.querySelector("#genres");

function clearStorage() {
    let movieMem = JSON.parse(localStorage.getItem('Selected Movie'));

    let showMem = JSON.parse(localStorage.getItem('Selected Show'));
    if (movieMem) {
        localStorage.removeItem('Selected Movie');
    }
    if (showMem) {
        localStorage.removeItem('Selected Show');
    }
}


// gets list of 20 movie with given genre
let genreMovies;
function getMovieByGenre(genre) {
    let pageNum = Math.floor(Math.random() * 500);
    let reqUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=' + pageNum + '&sort_by=popularity.desc&with_genres=' + genre;
    let options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIxNjJjYjdhNzJiMTQ3YzMwZWJkNGQ1ZTMwZjk5NCIsInN1YiI6IjY1NjU1OWJlYThiMmNhMDBjOTg2MDMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTs5QJnobmaJOzvPBH6vTdoLBBmBF9gcsN_8fyRzYWk'
        }
    }

    fetch(reqUrl, options)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        genreMovies = data;
    // console.log(genreMovies);
        displayMovieList();
    })
    
}

// displays list of 20 movie names
let movieId;
function displayMovieList() {
    movieTitles.innerHTML = '';
    movieTitles.setAttribute('class','scroll')
    console.log(genreMovies);
    for (let i = 0;i < genreMovies.results.length; i++) {
        let hr = document.createElement('hr');
        let randMovieEl = document.createElement('li');
        let movieLink = document.createElement('button');
        let currentMovieId = genreMovies.results[i].id;
        console.log(currentMovieId);
        movieLink.textContent = genreMovies.results[i].title;

        // sets styling for the movie buttons 
        randMovieEl.setAttribute('class','p-1 block');
        movieLink.setAttribute('class','px-4 py-2 text-gray-900 rounded-s-lg text-left');
        movieLink.setAttribute('style', 'color: white; transition: color 0.3s;');

        movieLink.addEventListener('mouseover',function(){
            movieLink.style.color = 'red';
        });
        movieLink.addEventListener('mouseout', function(){
            movieLink.style.color = 'white';
        })

        movieLink.addEventListener('click', function(){
            clearStorage();
            getMovieById(currentMovieId);
        })

        console.log('movieTitles', movieLink.textContent);
        randMovieEl.append(movieLink,hr);
        movieTitles.append(randMovieEl);
    }

}

// gets the movie selected by id
let movieDetails;
function getMovieById(movieId) { 
    let reqUrl = 'https://api.themoviedb.org/3/movie/'+ movieId +'?language=en-US';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIxNjJjYjdhNzJiMTQ3YzMwZWJkNGQ1ZTMwZjk5NCIsInN1YiI6IjY1NjU1OWJlYThiMmNhMDBjOTg2MDMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTs5QJnobmaJOzvPBH6vTdoLBBmBF9gcsN_8fyRzYWk'
        }
      };
      
    fetch(reqUrl, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        movieDetails = data;
        saveMovieDetails(movieDetails);
    })
    .then(function() {
        window.location.href = './display.html';
    })

}

// saves the data to local storage
function saveMovieDetails() {
    localStorage.setItem('Selected Movie', JSON.stringify(movieDetails));
}

// gets list of 20 show with given genre
let genreShows;
function getShowByGenre(genre) {
    
    let pageNum = Math.floor(Math.random() * 500);
    let reqUrl = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page='+ pageNum +'&sort_by=popularity.desc&with_genres='+ genre;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIxNjJjYjdhNzJiMTQ3YzMwZWJkNGQ1ZTMwZjk5NCIsInN1YiI6IjY1NjU1OWJlYThiMmNhMDBjOTg2MDMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTs5QJnobmaJOzvPBH6vTdoLBBmBF9gcsN_8fyRzYWk'
        }
      };
      
      fetch(reqUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            genreShows = data;
            console.log(genreShows);
        })
        .then(displayShowList);
}

// displays list of 20 show names
function displayShowList() {
    showTitles.innerHTML = '';
    showTitles.setAttribute('class','scroll');
    
    for (let i = 0; i < genreShows.results.length; i++) {
        let hr = document.createElement('hr');
        let randShowEl = document.createElement('li');
        let showLink = document.createElement('button');
        let currentShowId = genreShows.results[i].id;
        // sets styling for show buttons
        showLink.setAttribute('class','px-4 py-2 text-gray-900 rounded-s-lg text-left')
        randShowEl.setAttribute('class','p-1 block');
        showLink.setAttribute('style', 'color: white; transition: color 0.3s;');
        showLink.textContent = genreShows.results[i].name;

        showLink.addEventListener('mouseover',function(){
            showLink.style.color = 'red';
        });
        showLink.addEventListener('mouseout', function(){
            showLink.style.color = 'white';
        });

        showLink.addEventListener('click', function(){
            clearStorage();
            getShowById(currentShowId);
        })
        // console.log('showTitles', showLink.textContent);
        randShowEl.append(showLink,hr);
        showTitles.append(randShowEl);

    }

}

// gets show selected by its id
let showDetails;
function getShowById(showId) {
    let reqUrl = 'https://api.themoviedb.org/3/tv/'+ showId +'?language=en-US';
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIxNjJjYjdhNzJiMTQ3YzMwZWJkNGQ1ZTMwZjk5NCIsInN1YiI6IjY1NjU1OWJlYThiMmNhMDBjOTg2MDMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTs5QJnobmaJOzvPBH6vTdoLBBmBF9gcsN_8fyRzYWk'
        }
      };
    fetch(reqUrl, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        showDetails = data;
        saveShowDetails(showDetails);
    })
    .then(function() {
        window.location.href = './display.html';
    })
}

//saves show details to local storage
function saveShowDetails() {
    localStorage.setItem('Selected Show', JSON.stringify(showDetails));
}

// adds event listeners to the genre buttons
function genreLinks() {
    let movieGenreLinks = document.querySelectorAll('#dropdown-m .movieslist li a');
    let showGenreLinks = document.querySelectorAll('#dropdown-s .showslist li a');

    movieGenreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let genre = link.id;
            getMovieByGenre(genre);
        })
    })

    showGenreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let genre = link.id;
            getShowByGenre(genre);
        })
    })
};
genreLinks();

function displayMyList() {
    mediaList = JSON.parse(localStorage.getItem('myList'));
    console.log(mediaList);
    for (let i = 0; i < mediaList.length;i++) {
        if (mediaList[i].episode_run_time) {
            let hr = document.createElement('hr');
            let randShowEl = document.createElement('li');
            let showLink = document.createElement('button');
            let listShowId = mediaList[i].id;
            showLink.setAttribute('class','px-4 py-2 text-gray-900 rounded-s-lg text-left')
            randShowEl.setAttribute('class','p-1 block');
            showLink.setAttribute('style', 'color: white; transition: color 0.3s;');
            showLink.textContent = mediaList[i].name;

            showLink.addEventListener('mouseover',function(){
                showLink.style.color = 'red';
            });
            showLink.addEventListener('mouseout', function(){
                showLink.style.color = 'white';
            });

            showLink.addEventListener('click', function(){
                clearStorage();
                getShowById(listShowId);
            })
            randShowEl.append(showLink,hr);
            myListEl.append(randShowEl);
        } else {
            let hr = document.createElement('hr');
            let listMovieEl = document.createElement('li');
            let movieLink = document.createElement('button');
            let currentMovieId = mediaList[i].id;
            console.log(currentMovieId);
            movieLink.textContent = mediaList[i].title;
            listMovieEl.setAttribute('class','p-1 block');
            movieLink.setAttribute('class','px-4 py-2 text-gray-900 rounded-s-lg text-left');
            movieLink.setAttribute('style', 'color: white; transition: color 0.3s;');

            movieLink.addEventListener('mouseover',function(){
                movieLink.style.color = 'red';
            });
            movieLink.addEventListener('mouseout', function(){
                movieLink.style.color = 'white';
            })

            movieLink.addEventListener('click', function(){
                clearStorage();
                getMovieById(currentMovieId);
            })

            console.log('movieTitles', movieLink.textContent);
            listMovieEl.append(movieLink,hr);
            myListEl.append(listMovieEl);
        }
    }
}

displayMyList();