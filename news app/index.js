console.log("This is my index js file")
//my api key 
//user json formatter extension to format data of the api
// 97de9283f1bc4a56a508256814076a81

//initalize the news api
let country = 'in';//choose the country according to yourself
let apikey = '97de9283f1bc4a56a508256814076a81'
let newssource = `https://newsapi.org/v2/everything?q=tesla&from=2022-04-05&sortBy=publishedAt&apiKey=97de9283f1bc4a56a508256814076a81`;

//grab the news content
let newsAccordion = document.getElementById('newsAccordion');

//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(`GEt`, `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);
// xhr.open(`GEt`, `${newssource}`, true);
//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        //lets grab title and article

        let newsHtml = "";

        articles.forEach(function (element,index) {
            // console.log(element[news]);
            // console.log(element,index);
            let news = `
<div class="card">
    <div class="card-header" id="heading${index}">
        <h2 class="mb-0">
            <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse"
                data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b style="color:red;">Breaking News: ${index+1} &#x2192; </b>
                ${element["title"]}
            </button>
        </h2>
    </div>

    <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}"
        data-parent="#newsAccordion">
        <div class="card-body">
            ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a 
        </div>
    </div>
</div>`;
            newsHtml += news;

        });

        newsAccordion.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured");
    }
}

//now we send it using 
xhr.send();



