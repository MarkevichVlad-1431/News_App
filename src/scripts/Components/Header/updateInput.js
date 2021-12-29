import addPage from "../Content/createArticlePage";

let input = document.querySelector('.top__form-input');
let ul = document.querySelector('.inputMenu');

function packLi(data) {
    for (const newsTitle of data) {
        let li = document.createElement('li');
        li.classList.add('hideLi');
        li.innerHTML = newsTitle.fields.headline;
        ul.append(li);

        li.onclick = function () {
            addPage(newsTitle.fields);
            Array.from(ul.children).forEach(elem => elem.classList.add('hideLi'));
        }
    }
}


function Auto(str) {
    let replace = new Array(
        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
        "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э",
        "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"
    );
    let search = new Array(
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "\\[", "\\]",
        "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'",
        "z", "x", "c", "v", "b", "n", "m", ",", "\\."
    );

    for (var i = 0; i < replace.length; i++) {
        var reg = new RegExp(replace[i], 'mig');
        str = str.replace(reg, function (a) {
            return a == a.toLowerCase() ? search[i] : search[i].toUpperCase();
        })
    }
    return str
}


input.oninput = function () {

    let text = this.value.trim();

    let lis = document.querySelectorAll('.inputMenu > li');
    if (Auto(text) != '') {

        lis.forEach(e => {
            if (e.innerText.toUpperCase().search(Auto(text).toUpperCase()) == -1) {
                e.classList.add('hideLi');
            } else {
                e.classList.remove('hideLi');
            }
        })
    } else {
        lis.forEach(e => {
            e.classList.add('hideLi');
        });
    }
}

export default packLi;