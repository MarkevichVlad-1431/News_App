function sortNews(news) {
    
    let sortArrayNews = [];

    for (const item of news) {
        sortArrayNews.push(item.webPublicationDate);
    }

    sortArrayNews = sortArrayNews.sort().reverse();

    for (let i = 0; i < sortArrayNews.length; i++) {

        for (const iterator of news) {
            if (sortArrayNews[i] === iterator.webPublicationDate) {
                sortArrayNews[i] = iterator;
            }
        }
    }
    return sortArrayNews;
}

export default sortNews;