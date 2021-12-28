import addNews from "./addNews";
import sortNews from "./sortNews";

let initialUrl = 'https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da';

async function getRequestNews(url) {
    await fetch(url)
        .then(response => response.json())
        .then(response => {
            // console.log((response.response.results));
            addNews(sortNews(response.response.results));
        });
}

getRequestNews(initialUrl);