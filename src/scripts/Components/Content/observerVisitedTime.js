import addNews from "./createArticlePage";
function checkVisitedNews(data) {

    let firstNewsWrapper = document.querySelector('.firstNewsWrapper');
    let newsWrapper = document.querySelectorAll('.newsWrapper');

    firstNewsWrapper.onclick = function() {
        let title = firstNewsWrapper.getElementsByClassName('firstNewsWrapper__textContent-title')[0];
        let stateButton;

        for (const item of data) {
            if(item.fields.headline == title.textContent){
                addNews(item.fields);

                stateButton = item;
                stateButton.VISITED = true;
                stateButton.lastVisitTime = new Date();
                localStorage.setItem(title.textContent, JSON.stringify(stateButton))
            }
        }
        
    }

    for (const news of newsWrapper) {

        news.onclick = function(){
            let title = news.getElementsByClassName('newsWrapper__text-title')[0];
            let stateButton;

            for (const item of data) {
               
                if(item.fields.headline == title.textContent){
                    addNews(item.fields);

                    stateButton = item;
                    stateButton.VISITED = true;
                    
                    stateButton.lastVisitTime = new Date();

                    localStorage.setItem(title.textContent, JSON.stringify(stateButton))
                }
            }
        }

    }
}

export default checkVisitedNews;