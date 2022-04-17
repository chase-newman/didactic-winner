/*API Key: 99557f734805499bab4cba09c33c8ae6*/

const apiURL = "https://newsdata.io/api/1/news?apikey=pub_658993647d708d4b3c82389276d77835794d&q=Business ";

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const articles = data.results;
        console.log(articles);
        document.getElementById("article-one").innerHTML = articles[0].description;
        document.getElementById("article-two").innerHTML = articles[1].description;
        document.getElementById("article-three").innerHTML = articles[2].description;
    });
    