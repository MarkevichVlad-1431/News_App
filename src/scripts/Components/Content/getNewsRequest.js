import packLi from "../Header/updateInput";
import addNews from "./addNews";
import checkVisitedNews from "./observerVisitedTime";
import sortNews from "./sortNews";

let initialUrl = 'https://content.guardianapis.com/search?q=trending&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da';

/* CLEAR LOCAL STATE */
// localStorage.clear();    

localStorage.setItem('startURL', initialUrl.toString());

async function getRequestNews() {

    if (localStorage.getItem('URL')) {

        await fetch(localStorage.getItem('URL'))
            .then(response => response.json())
            .then(response => {
                addNews(sortNews((response.response.results)));
                checkVisitedNews(response.response.results);
                packLi(response.response.results);
            })

    } else {

        await fetch(localStorage.getItem('startURL'))
            .then(response => response.json())
            .then(response => {                
                addNews(sortNews((response.response.results)));
                checkVisitedNews(response.response.results);
                packLi(response.response.results);
            });
    }
}

if(!(document.URL === 'http://localhost:5500/1')){
    getRequestNews();
}




export default getRequestNews;