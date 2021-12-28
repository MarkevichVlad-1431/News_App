import getRequestNews from "../Content/getNewsRequest";

const submenu = document.querySelector('.submenu');

submenu.onclick = function(event){
    let target = event.target;

    if(target.tagName === 'A'){
        let route = target.getAttribute('href');
        console.log(route);
       
        let newURL = `https://content.guardianapis.com/search?q=${route}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=5ef33414-1934-47dc-9892-5d09ab7c00da`;
    
        localStorage.setItem('URL', newURL.toString());
    }
}