let buttonScrollTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', function () {
    if(window.pageYOffset){
        buttonScrollTop.classList.remove('scrollTopClose');
    } else {
        buttonScrollTop.classList.add('scrollTopClose');
    }
});

buttonScrollTop.onclick = function() {
    window.scrollTo(0,0)
}