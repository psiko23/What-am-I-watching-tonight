fetch('https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=%3CREQUIRED%3E')
.then(function (response) {
    response.json();
    console.log(response);
    return response;
})
.then(function (data) {
    console.log(data);
    return data;
})