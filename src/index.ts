// import App from './components/app/app';
// import './global.css';

// const app = new App();
// app.start();
const news = document.querySelector("#news");

type TypeScriptNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
}

let apiUrl = "https://newsapi.org/v2/";
let apiKey = "062c03dba681490388fb5a80721a8610";

async function fetchInfo() {
    let response = await fetch(`${apiUrl}top-headlines?sources=techcrunch&apiKey=${apiKey}`);
    let obj = await response.json();
    renderNews(obj.articles);
    console.log(obj.articles);
}

fetchInfo();

function renderNews(newsLot: TypeScriptNews[]){
    newsLot.forEach(newItem => {
        const listItem = document.createElement('div');
        listItem.className = 'news__items';
        news?.appendChild(listItem);

        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);
        
        const descItem = document.createElement('p');
        descItem.innerHTML = newItem.description;
        listItem.appendChild(descItem);

        const authorItem = document.createElement('p');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);

    });
}


