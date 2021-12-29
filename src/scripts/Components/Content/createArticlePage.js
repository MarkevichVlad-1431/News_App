let body = document.querySelector('.content');

function addPage(news) {
    body.innerHTML = '';
    body.innerHTML += createArticlePage(news);
}

function createArticlePage(news) {

    let time = new Date(news.lastModified);

    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    
    let dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
    time = (dateTimeFormat.format(new Date(news.lastModified)));

    return `
        <div class="articlePage">
            <div class="articlePage__img">
                <img src="${news.thumbnail}" alt="foto" />
            </div>
            <div class="articlePage__text">
                <div class="articlePage__text-title">
                   ${news.headline}
                </div>
                <div class="articlePage__text-avtor">
                    <div class="avtor">${news.publication}</div>
                    <div class="date">${time}</div>
                </div>
                <div class="articlePage__text-line">
                    <hr />
                </div>
                <div class="articlePage__text-text">
                    ${news.body}
                </div>
            </div>
        </div>
    `
}

export default addPage;