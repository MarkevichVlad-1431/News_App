import getRequestNews from "../Content/getNewsRequest";

let logoTop = document.querySelector('.top__logo');
 
logoTop.onclick = () => {
    localStorage.removeItem('URL'); 
    getRequestNews();
}


