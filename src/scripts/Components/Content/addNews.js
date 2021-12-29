import {
    updateDate
} from "./updateDate";

const bodyNews = document.querySelector('.newsList');

function addNews(news) {
    bodyNews.innerHTML = '';

    if (news.length) {
        news.forEach((post, index) => {
            if (index == 0) {
                bodyNews.innerHTML += createFirstNews(post);
            } else {
                bodyNews.innerHTML += createNews(post);
            }

        });
    }
}

export const createFirstNews = (data) => {

    let stateButton = JSON.parse(localStorage.getItem(data.fields.headline));
    let now = new Date();

    let time

    if (stateButton) {
        let timer = document.querySelector('.time');
        data = stateButton;

        time = Math.ceil((now - new Date(data.lastVisitTime)) / 60000);
    }

    let timePassed = updateDate(data.fields.firstPublicationDate);

    return `
        <a href="#" class="firstNewsWrapper">
            <div class="firstNewsWrapper__textContent">
                <div class="firstNewsWrapper__textContent-title">${data.fields.headline}</div>
                <div class="firstNewsWrapper__textContent-text">${data.fields.trailText}</div>
                <div class="firstNewsWrapper__textContent-button">
                    <div class="dataPost">${timePassed} days ago</div>
                    <div class="button">
                        <button class="readMore">ReadMore</button>
                    </div>
                    <div class="visited">${ (data.VISITED) ? 'Просмотрено ' + time  + ' минут назад' : 'Не просмотрено'}</div>
                </div>
            </div>
            <img class="firstNewsWrapper__img" src = "${data.fields.thumbnail}"> 
            </div>
        </a>
    
    `
}

const createNews = (data) => {
    let stateButton = JSON.parse(localStorage.getItem(data.fields.headline));
    let now = new Date();
    let time;

    if (stateButton) {
        data = stateButton;
        time = Math.ceil((now - new Date(data.lastVisitTime)) / 60000);
    }

    let timePassed = updateDate(data.fields.firstPublicationDate);

    return `
        <a href="#" class="newsWrapper">
            <div class="newsWrapper__img">
                <img src = "${data.fields.thumbnail}"/>
            </div>
            <div class="newsWrapper__text">
                <div class="newsWrapper__text-title">${data.fields.headline}</div>
                <div class="newsWrapper__text-text">${data.fields.trailText}
                </div>
                <div class="newsWrapper__text-button">
                    <div class="timeNews">${timePassed} days ago</div>
                    <button class="readMore">ReadMore</button>
                </div>
                <div class="visited">${ (data.VISITED) ? 'Просмотрено ' + time + ' минут назад' : ' Не просмотрено'}</div>
            </div>
        </a>`
}



export default addNews;