//need seperate fetch request for user selected movie/ show

//blanket fetch request for movie credits = fectch('https://api.themoviedb.org/3/movie/movie_[.id]/credits?language=en-US', options)

//blanket fetch request for show credits = fectch('https://api.themoviedb.org/3/tv/series_[.id]/credits?language=en-US', options)

//info to be stored for the display.html from the original fetch request
    //.overview
    //.title
    //.vote_average
    //.release_date

//info to be stored from the credits fetch request
    //.cast
    //.name
    //.crew
    //.known_for_department = "directing"
    //.name

//response.cast[0/1]