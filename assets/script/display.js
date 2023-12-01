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