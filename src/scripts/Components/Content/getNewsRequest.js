import addNews from "./addNews";
import sortNews from "./sortNews";

let initialUrl = 'https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da';

localStorage.setItem('startURL', initialUrl.toString());

async function getRequestNews() {
    if (localStorage.getItem('URL')) {

        await fetch(localStorage.getItem('URL'))
            .then(response => response.json())
            .then(response => {
                addNews(sortNews((response.response.results)));
            });

    } else {

        await fetch(localStorage.getItem('startURL'))
            .then(response => response.json())
            .then(response => {
                addNews(sortNews((response.response.results)));
            });
    }


}

getRequestNews();

export default getRequestNews;