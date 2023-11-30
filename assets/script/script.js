const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmIxNjJjYjdhNzJiMTQ3YzMwZWJkNGQ1ZTMwZjk5NCIsInN1YiI6IjY1NjU1OWJlYThiMmNhMDBjOTg2MDMyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTs5QJnobmaJOzvPBH6vTdoLBBmBF9gcsN_8fyRzYWk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/configuration', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));